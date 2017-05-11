@conversations.each do |conversation|
  json.set! conversation.id do 
    json.partial! 'api/conversations/conversation', conversation: conversation

  json.messages conversation.messages
  end
end
