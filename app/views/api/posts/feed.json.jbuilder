@posts.each do |post|
  json.set! post[:post].id do

    json.post do
      json.partial! 'api/posts/post', post: post[:post]
    end

    json.receiver do 
      json.partial! 'api/posts/user', user: post[:receiver]
    end

    json.author do 
      json.partial! 'api/posts/user', user: post[:author]
    end

  end
end
