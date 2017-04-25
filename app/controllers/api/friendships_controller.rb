class Api::FriendshipsController < ApplicationController
  def index
    @friend_requests = current_user.requested_friends
    render 'api/friendships/friendrequests'
  end 

  def create
    @requester = User.find friendship_params[:currentUserId]
    @requested = User.find friendship_params[:requestedUserId]
    @requester.friend_request(@requested)

    @status = 'pending'
    render 'api/friendships/friendship'
  end

  def update
    @requested = User.find friendship_params[:currentUserId]
    @requester = User.find friendship_params[:requesterUserId]

    if friendship_params[:action] == 'approve'
      @requested.accept_request(@requester)
      @status = 'approved'
    render 'api/friendships/friendship'
    else 
      @requested.decline_request(@requester)
      @status = 'denied'
    render 'api/friendships/friendship'
    end
  end

  def destroy
    @current_user = User.find friendship_params[:currentUserId]
    @unfriended_user = User.find friendship_params[:requesterUserId]
    @current_user.remove_friend(@unfriended_user)
    render json: 'DELETED!'
  end

  private 

  def friendship_params
    params.require(:friendship).permit(:currentUserId, 
                                       :requestedUserId, 
                                       :requesterUserId, :action)
  end
end
