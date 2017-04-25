class Api::ProfilesController < ApplicationController
  def show
    @profile = User.find(params[:user_id]).profile
    render "api/profiles/show"
  end

  def update
  end
end
