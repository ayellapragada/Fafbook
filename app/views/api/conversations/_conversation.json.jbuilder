json.id conversation.id

json.sender do
  json.partial! 'api/users/friend', friend: conversation.sender
end

json.recipient do 
  json.partial! 'api/users/friend', friend: conversation.recipient
end

json.time conversation.messages.last.created_at 
json.order_by conversation.messages.last.created_at.to_i
json.message conversation.messages.last
