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

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
