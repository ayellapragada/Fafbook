class ConversationsController < ApplicationController

  def index 
    @conversations = current_user.conversations
  end

  def create 
    if Conversation.between(params[:sender_id], params[:recipient_id]).present?
      @Conversation = Conversation.between(params[:sender_id],
                                           params[:recipient_id]).first
    else 
      @conversation = Conversation.create!(conversation_params)
    end
  end


  private 

  def conversation_params
    params.permit(:sender_id, :recipient_id)
  end

end
