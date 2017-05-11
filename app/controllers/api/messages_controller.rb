class Api::MessagesController < ApplicationController


  def index 
    @conversation = Conversation.find(params[:conversation_id])
    @messages = @conversation.messages 

    if @messages.last 
      if @messages.last.user_id != current_user.id 
        @messages.last.read = true;
      end 
    end 

    render 'api/conversations/conversation'
  end

  def create 
    @conversation =  Conversation.find(params[:conversation_id])
    @message = @conversation.messages.new(message_params)
    if @message.save 
      render 'api/conversations/conversation'
    end 
  end 

  private 

  def message_params 
    params.require(:message).permit(:body, :user_id)
  end

end
