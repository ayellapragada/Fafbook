json.extract! @user, :fname, :lname , :id, :gender
json.partial! "api/users/images", user: @user
json.status @status
