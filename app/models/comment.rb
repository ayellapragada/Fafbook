# == Schema Information
#
# Table name: comments
#
#  id               :integer          not null, primary key
#  title            :string(50)       default("")
#  comment          :text
#  commentable_type :string
#  commentable_id   :integer
#  user_id          :integer
#  role             :string           default("comments")
#  created_at       :datetime
#  updated_at       :datetime
#

class Comment < ActiveRecord::Base

  include ActsAsCommentable::Comment

  belongs_to :commentable, :polymorphic => true

  default_scope -> { order('created_at ASC') }

  # NOTE: install the acts_as_votable plugin if you
  # want user to vote on the quality of comments.
  #acts_as_voteable

  # NOTE: Comments belong to a user
  belongs_to :user
  belongs_to :post, class_name: "Post", foreign_key: :commentable_id

  acts_as_likeable
  acts_as_notifiable :users,
    targets: -> (comment, key)  {
    ([comment.post.receiver] +
     [comment.post.author] +
     comment.post.commented_users -
     [comment.user]).uniq
  },notifier: -> (comment, key) {
    comment.user
  }
end
