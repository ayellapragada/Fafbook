class Api::NotificationsController < ApplicationController

  def index
    @notifications = current_user.notifications.order('created_at DESC').limit(5)
    render 'api/notifications/notifications'
  end

  def read 
    @notifications = current_user.notifications.order('updated_at DESC').limit(5)
    @notifications.map(&:open!)

    render 'api/notifications/notifications'
  end

  def read_one 
    @notifications = current_user.conversations.order('updated_at DESC').limit(5)
    debugger
    render 'api/notifications/notifications'
  end
end
