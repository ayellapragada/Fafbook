json.extract! user, :id, :email, :fname, :lname, :dob, :gender 
json.profile_url asset_path(user.profile_photo.url)
