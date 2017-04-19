class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      user_params[:email],
      user_params[:password])
    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ["Invalid email/password combination"], status: 401
    end
  end

  def show
    @user = current_user
    render "api/users/show"
  end

  def delete
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["No one is logged in"], status: 404
    end
  end
end
