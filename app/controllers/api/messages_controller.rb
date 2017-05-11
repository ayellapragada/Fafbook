class Api::MessagesController < ApplicationController


  def index 
    @conversation = Conversation
      .includes(messages: [:user])
      .find(params[:conversation_id])
    @messages = @conversation.messages.includes(:user)

    if @messages.last 
      if @messages.last.user_id != current_user.id 
        @messages.last.read = true;
      end 
    end 

    render 'api/conversations/conversation'
  end

  def create 
    @conversation =  Conversation
      .includes(:messages)
      .find(params[:conversation_id])
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

end
