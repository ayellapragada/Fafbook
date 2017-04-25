class Api::FriendshipsController < ApplicationController
  def index
  end 

  def create
    @requester = User.find friendship_params[:currentUserId]
    @requested = User.find friendship_params[:requestedUserId]
    @requester.friend_request(@requested)
  end

  def update
    debugger;
  end

  def destroy
  end

  private 

  def friendship_params
    params.require(:friendship).permit(:currentUserId, 
                                       :requestedUserId, 
                                       :requesterId, :action)
  end
end
