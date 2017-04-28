json.set! @post.id do
  json.post do
    json.partial! 'api/posts/post', post: @post
  end
  json.receiver do
    json.partial! 'api/posts/user', user: @receiver
  end
  json.author do 
    json.partial! 'api/posts/user', user: @author
  end

end
