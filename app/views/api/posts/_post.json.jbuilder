json.extract! post, :body, :created_at, :id


json.comments post.comments do |comment|
  json.id comment.id
  json.body comment.comment
  json.created_at comment.created_at
  json.fname comment.user.fname
  json.lname comment.user.lname
  json.user_id comment.user.id
  json.profileurl asset_path(comment.user.profile_photo.url)

end
