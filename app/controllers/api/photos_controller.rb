class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    @photo.album_id ||= current_user.albums.find_by(name: "Timeline").id

    if @photo.save
      @url = @photo.picture.url
      render "api/photos/show"
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
    # I need to permit more things, but I'm not sure what their name is yet.
    params.require(:photo).permit(:album_id, :caption, :picture)
  end
end
