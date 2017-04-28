class Api::PostsController < ApplicationController
  def index
    debugger
#    Posts.where("author_id IN (?) or receiver_id IN (?)", )
  end

  def create
    @post = Post.create(post_params)

    if @post.save
      render 'api/posts/show'
    else 
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
  end

  def show
  end

  def delete
  end

  def timeline

  end



end
