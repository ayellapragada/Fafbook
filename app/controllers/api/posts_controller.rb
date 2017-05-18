class Api::PostsController < ApplicationController
  def index
    possible_author_ids = [current_user.id] + current_user.friends.ids 
    possible_receiver_id = [current_user.id]

    page = params[:page] ||= 0
    num_posts = params[:num_posts] ||= 5
    page = page.to_i
    num_posts = num_posts.to_i

    posts_with_ids = Post
      .where("author_id IN (?) or receiver_id IN (?)", possible_author_ids, possible_receiver_id)
      .includes(:author, :receiver, :comments)
      .order("created_at DESC")
      .offset(page * num_posts)
      .limit(num_posts)

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
      @post.notify :users, key: "posted on your wall"
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

  def like 
    @post = Post.find(params[:id])
    if current_user.likes?(@post)
      @like = Like
        .where(likeable_id: @post.id)
        .where(liker_id: current_user.id)
        .where(likeable_type: 'Post')
        .first
      @notification = ActivityNotification::Notification
        .where(notifiable_type: "Socialization::ActiveRecordStores::Like")
        .where(notifiable_id: @like.id)
        .where(notifier_id: current_user.id)
        .first

      @notification.destroy

      current_user.unlike!(@post)
    else
      current_user.like!(@post)
      @like = Like
        .where(likeable_id: @post.id)
        .where(liker_id: current_user.id)
        .where(likeable_type: 'Post')
        .first
      @like.notify :users, key: "liked a post involving you"
    end
    @author = @post.author
    @receiver = @post.receiver
    render 'api/posts/show'
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy 
    render 'api/posts/deleted'
  end

  def feed
    page = params[:page] ||= 0
    num_posts = params[:num_posts] ||= 5
    page = page.to_i
    num_posts = num_posts.to_i

    posts_with_ids = Post
      .where(receiver_id: params[:id])
      .includes(:author, :receiver, :comments)
      .order("created_at DESC")
      .offset(page * num_posts)
      .limit(num_posts)

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
