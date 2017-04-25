json.extract! @user, :id, :email, :fname, :lname
json.partial! "api/users/images", user: @user
