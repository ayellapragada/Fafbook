json.extract! user, :id, :fname, :lname
json.profile_url asset_path(user.profile_photo.url)
