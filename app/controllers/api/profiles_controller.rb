class Api::ProfilesController < ApplicationController
  def show
    @profile = User.find(params[:user_id]).profile
    render "api/profiles/show"
  end

  def update
    @user = User.find(params[:user_id])
    @profile = @user.profile
    debugger
    if @profile.update(profile_params)
      render "api/users/show"
    else 
      render json: @profile.errors, status: 422 
    end

  end
end
