class Api::MessagesController < ApplicationController
  def index 
    @conversation = Conversation
      .includes(messages: [:user])
      .find(params[:conversation_id])

    @messages = @conversation.messages

    render 'api/conversations/conversation'
  end

  def create 
    @conversation =  Conversation
      .includes(:messages)
      .find(params[:conversation_id])

    @messages = @conversation.messages.includes(:user)

    last_message_read

    @message = @conversation.messages.new(message_params)
    if @message.save 
      Pusher.trigger('messages', 'new_message',
                     {id: @conversation.id})

      render 'api/conversations/conversation'
    end 
  end 


  private 

  def message_params 
    params.require(:message).permit(:body, :user_id)
  end

  def last_message_read 
    if @messages.last 
      if @messages.last.user_id != current_user.id 
        @messages.last.update(read: true)
      end 
    end 
  end

end
