class Api::PostsController < ApplicationController
  def index
    # Posts.where("author_id IN (?) or receiver_id IN (?)", )
  end

  def create
    @post = Post.create(post_params)

    if @post.save
      @author = User.find(post_params[:author_id])
      @receiver = User.find(post_params[:receiver_id])
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

  def feed
    posts_with_ids = Post
      .where(receiver_id: params[:id])
      .includes(:author, :receiver)
      .order("created_at DESC")
      .limit(5)

    @posts = posts_with_ids.map do |post|
      {
        post: post,
        author: User.find(post.author_id),
        receiver: User.find(post.receiver_id)
      }
    end

    @posts_array = posts_with_ids.collect(&:id)

    render 'api/posts/feed'
  end


end
