class Api::UsersController < ApplicationController
  def index
    @users = User.all
    # Getting by using query string in params
    # Need to eventually make this search. No reason to get EVERY user.
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
    @profile = @user.profile
    if current_user.id == @user.id  
      @status = 0
    elsif current_user.friends_with?(@user) 
      @status = 1
      render 'api/users/show'
    elsif current_user.pending_friends.include?(@user) 
      @status = -1
      render 'api/users/not_friends'
    else
      @status = -2
      render 'api/users/not_friends'
    end
  end 

  #  def update
  #    @user = User.find(params[:id])
  #  end 

  #  def destroy
  #    @user = User.find(params[:id])
  #  end

end

