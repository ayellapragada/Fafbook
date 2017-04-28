json.extract! post, :body, :created_at, :id


json.comments post.comments do |comment|
  json.body comment.comment
  json.fname comment.user.fname
  json.lname comment.user.lname
  json.profileurl asset_path(comment.user.profile_photo.url)

end
