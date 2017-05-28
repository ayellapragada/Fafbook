json.extract! friend, :fname, :lname, :id
json.friend_count friend.friends.count
json.profile_url asset_path(friend.profile_photo.url)
