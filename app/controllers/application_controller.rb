class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def user_params
    params.require(:user).permit(:email, :password, :fname, :lname,
                                 :month, :date, :year, :gender)
  end


  def profile_params
    params.require(:profile).permit(:about, :phone, :education, :website, :language,
                                    :location, :work, :relationship)
  end

  def prepare_user_for_show(user)
    profile_album_id = user.albums.find_by(name: "Profile")


    @profile = user.profile
    @friends = user.friends.order("created_at DESC").limit(9)
    @photos = user.photos
      .where.not(album_id: profile_album_id)
      .order("created_at DESC")
      .limit(9)
  end

  def current_user
    @current_user ||= User.find_by session_token: session[:session_token]
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    render json: {base: ['invalid credentials']}, status: 401 if !current_user
  end
end
