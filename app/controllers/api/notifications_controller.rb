class Api::NotificationsController < ApplicationController

  def index
    @notifications = current_user.notifications
    debugger 
    render 'api/notifications/notifications'
  end
end
