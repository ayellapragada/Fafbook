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
end
