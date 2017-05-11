class Api::CommentsController < ApplicationController
  def create
    @post = Post.find(params[:comment][:post_id])
    @post.comments.create(comments_params)

    @author = User.find(@post.author_id)
    @receiver = User.find(@post.receiver_id)

    render 'api/posts/show'
  end

  def update
  end

  def destroy
  end


  def comments_params
    params.require(:comment).permit(:comment, :user_id)
  end
end
