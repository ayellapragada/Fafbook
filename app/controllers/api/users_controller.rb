class Api::UsersController < ApplicationController
  def index
    @users = User.all
    # Need to eventually make this search. No reason to get EVERY user.
  end  

  def create
    @user = User.new(user_params)
    debugger

    if @user.save
      login!(@user)
      render "api/users/show"
    else 
      render json: @user.errors, status: 422 
    end 
  end 

 def show
   @user = User.find(params[:id])
   render 'api/users/show'
 end 

#  def update
#    @user = User.find(params[:id])
#  end 

#  def destroy
#    @user = User.find(params[:id])
#  end

end

