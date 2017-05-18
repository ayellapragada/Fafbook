json.extract! notification, :id, :key, :notifiable_type, :created_at 
json.unopened notification.unopened?

json.notifier do 
  json.partial! 'api/users/friend', friend: User.find(notification.notifier_id)
end
