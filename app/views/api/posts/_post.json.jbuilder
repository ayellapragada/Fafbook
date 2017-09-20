json.extract! post, :body, :id
json.likes post.likers(User) 
json.liked post.liked_by?(current_user)
json.created_at post.updated_at
# oh man. it's dissappointing that I'm using created at and updated at together
# i'm actually pretty scared to break this, especially since we have a comments
# that's also done in an odd way. Welp.


json.comments post.comments do |comment|
  json.id comment.id
  json.body comment.comment
  json.created_at comment.updated_at
  json.fname comment.user.fname
  json.lname comment.user.lname
  json.user_id comment.user.id
  json.profileurl asset_path(comment.user.profile_photo.url)

end
