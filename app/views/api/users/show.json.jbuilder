json.partial! "api/users/user", user: @user
json.partial! "api/users/images", user: @user
json.partial! "api/profiles/base_profile", profile: @profile
json.status @status

json.friend_count @user.friends.length
json.friends @friends do |friend|
  json.partial! "api/users/friend", friend: friend
end

json.photos @photos do |photo|
  json.partial! "api/users/photo", photo: photo
end



