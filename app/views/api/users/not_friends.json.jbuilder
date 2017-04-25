json.extract! @user, :fname, :lname , :id
json.partial! "api/users/images", user: @user
json.status @status
