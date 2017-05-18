# == Schema Information
#
# Table name: posts
#
#  id           :integer          not null, primary key
#  body         :text             not null
#  author_id    :integer
#  receiver_id  :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  likers_count :integer          default(0)
#

class Post < ApplicationRecord
  validates :body, presence: true

  belongs_to :author, class_name: 'User', foreign_key: 'author_id'
  belongs_to :receiver, class_name: 'User', foreign_key: 'receiver_id'

  acts_as_commentable
  acts_as_likeable
  acts_as_notifiable :users,
    targets: -> (post, key)  {
    ([post.receiver] - [post.author]).uniq
  },notifier: -> (post, key) {
    post.author
  }

  def commented_users 
    final = self.comments.includes(:user).inject([]) do |result, comment|
      result << comment.user 
    end

    final.uniq
  end
end
