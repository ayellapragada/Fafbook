class Api::ConversationsController < ApplicationController
  def index 
    @conversations = current_user.conversations 
    render 'api/conversations/conversations'
  end

  def create 
    if Conversation.between(params[:conversation][:sender_id], params[:conversation][:recipient_id]).present?
      @Conversation = Conversation.between(params[:conversation][:sender_id],
                                           params[:conversation][:recipient_id]).first
    else 
      @conversation = Conversation.create!(sender_id: params[:conversation][:sender_id],
                                           recipient_id: params[:conversation][:recipient_id])
      Pusher.trigger('messages', 'new_message',
                     {id: @conversation.id})

      render 'api/conversations/conversation'
    end
  end


  private 

  def conversation_params
    params.permit(:sender_id, :recipient_id)
  end
end
