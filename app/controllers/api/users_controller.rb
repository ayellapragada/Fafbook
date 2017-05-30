class Api::UsersController < ApplicationController
  def index
    if params[:friendsOnly] === "true"
      @results = current_user.friends.search_by_full_name(params[:query]).limit(5)
    else
      @results = User.search_by_full_name(params[:query]).limit(5)
    end
    render "api/users/search"
  end  

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render "api/users/login"
    else 
      render json: @user.errors, status: 422 
    end 
  end 

  def show
    @user = User.find(params[:id])
    prepare_user_for_show(@user)

    if current_user.id == @user.id  
      @status = 0
      render 'api/users/show'
    elsif current_user.friends_with?(@user) 
      @status = 1
      render 'api/users/show'
    elsif current_user.pending_friends.include?(@user) 
      @status = -1
      render 'api/users/not_friends'
    elsif current_user.requested_friends.include?(@user) 
      @status = -3
      render 'api/users/not_friends'
    else
      @status = -2
      render 'api/users/not_friends'
    end
  end 

  def update
    @user = User.find(params[:id])

    if current_user != @user
      render json: "Can't edit a different user!"
    elsif @user.update(user_picture_params)
      @status = 0
      prepare_user_for_show(@user)
      render 'api/users/show'
    else 
      render json: @user.errors, status: 422 
    end

  end 

  def photos
    @user = User.find(params[:id])
    prepare_user_for_show(@user, 9, @user.photos.count)
    if current_user.id == @user.id  
      @status = 0
    elsif current_user.friends_with?(@user) 
      @status = 1
    elsif current_user.pending_friends.include?(@user) 
      @status = -1
    elsif current_user.requested_friends.include?(@user) 
      @status = -3
    else
      @status = -2
    end
    render 'api/users/show'
  end

  def friends
    @user = User.find(params[:id])
    prepare_user_for_show(@user, @user.friends.count, 9)
    if current_user.id == @user.id  
      @status = 0
    elsif current_user.friends_with?(@user) 
      @status = 1
    elsif current_user.pending_friends.include?(@user) 
      @status = -1
    elsif current_user.requested_friends.include?(@user) 
      @status = -3
    else
      @status = -2
    end
    render 'api/users/show'
  end


  #  def destroy
  #    @user = User.find(params[:id])
  #  end

  def user_picture_params 
    params.require(:user).permit(:profile_photo, :cover_photo)
  end
end

