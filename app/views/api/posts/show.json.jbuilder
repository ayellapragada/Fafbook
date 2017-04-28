json.partial! 'api/posts/post', post: @post
json.receiver do
  json.partial! 'api/posts/user', user: @receiver
end

json.author do 
  json.partial! 'api/posts/user', user: @receiver
end


