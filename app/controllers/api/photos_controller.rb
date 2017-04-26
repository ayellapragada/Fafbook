class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    @user = current_user
    @photo.album_id ||= @user.albums.find_by(name: "Timeline").id

    if @photo.save
      prepare_user_for_show(@user)
      @status = 0
      render "api/users/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end 
  end

  def update
  end

  def show
    @photo = Photo.find(params[:id])
    render "api/photos/show"
  end

  def destroy
  end

  def photo_params
    params.require(:photo).permit(:album_id, :caption, :picture)
  end
end
