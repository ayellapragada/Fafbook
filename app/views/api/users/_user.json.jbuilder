json.extract! user, :id, :email, :fname, :lname, :dob, :gender, :full_name
json.profile_url asset_path(user.profile_photo.url)

