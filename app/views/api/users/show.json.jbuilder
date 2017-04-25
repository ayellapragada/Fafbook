json.partial! "api/users/user", user: @user
json.partial! "api/users/images", user: @user
json.partial! "api/profiles/base_profile", profile: @profile
json.status @status
