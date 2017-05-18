# == Schema Information
#
# Table name: likes
#
#  id            :integer          not null, primary key
#  liker_type    :string
#  liker_id      :integer
#  likeable_type :string
#  likeable_id   :integer
#  created_at    :datetime
#

class Like < Socialization::ActiveRecordStores::Like
  belongs_to :user, class_name: 'User', foreign_key: 'liker_id'
  belongs_to :post, class_name: 'Post', foreign_key: 'likeable_id'

  acts_as_notifiable :users,
    targets: -> (like, key)  {
    ([like.post.author] + [like.post.receiver] - [like.user]).uniq
  },notifier: -> (like, key) {
    like.user
  }
end
