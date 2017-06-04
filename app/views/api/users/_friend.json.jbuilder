json.extract! friend, :fname, :lname, :id, :full_name
json.friend_count friend.friends.count
json.profile_url asset_path(friend.profile_photo.url)
