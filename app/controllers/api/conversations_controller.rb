class Api::ConversationsController < ApplicationController
  def index 
    @conversations = current_user.conversations.joins(messages: :user) 
    render 'api/conversations/conversations'
  end

  def read 
    @conversations = current_user.conversations.includes(:messages) 

    Conversation.transaction do
      @conversations.each do |conversation|
        if conversation.messages.last.user_id != current_user.id && 
            !conversation.messages.last.read
          conversation.messages.last.update(read: true)
        end
      end
    end

    render json: "done"
  end

  def create 
    if Conversation.between(params[:conversation][:sender_id], params[:conversation][:recipient_id]).present?
      @conversation = Conversation.between(params[:conversation][:sender_id],
                                           params[:conversation][:recipient_id])
        .first

      render 'api/conversations/conversation'
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
