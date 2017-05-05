class Api::PostsController < ApplicationController
  def index
    possible_author_ids = [current_user.id] + current_user.friends.ids 
    possible_receiver_id = [current_user.id]
    posts_with_ids = Post
      .where("author_id IN (?) or receiver_id IN (?)", possible_author_ids, possible_receiver_id)
      .includes(:author, :receiver, :comments)

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
    if @post.update(post_params)
      @author = @post.author
      @receiver = @post.receiver
      render 'api/posts/show'
    else 
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy 
    render 'api/posts/deleted'
  end

  def feed
    posts_with_ids = Post
      .where(receiver_id: params[:id])
      .includes(:author, :receiver, :comments)
      .order("created_at DESC")

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
