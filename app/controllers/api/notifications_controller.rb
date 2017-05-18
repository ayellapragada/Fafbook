class Api::NotificationsController < ApplicationController

  def index
    @notifications = current_user.notifications
    render 'api/notifications/notifications'
  end
end
