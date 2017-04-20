class Api::ProfileController < ApplicationController
  def show 
    @profile = User.find(params[:user_id]).profile
    render "api/profile/show"
  end 

  def update
  end 
end
