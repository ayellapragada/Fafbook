json.extract! @user, :fname, :lname 
json.partial! "api/users/images", user: @user
json.id @status_code
