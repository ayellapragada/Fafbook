json.extract! @user, :id, :email, :fname, :lname, :session_token, :full_name
json.partial! "api/users/images", user: @user
