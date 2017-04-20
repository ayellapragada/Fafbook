# == Schema Information
#
# Table name: profiles
#
#  id           :integer          not null, primary key
#  user_id      :integer
#  phone        :string
#  education    :string
#  website      :string
#  language     :string
#  location     :string
#  work         :string
#  relationship :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Profile < ApplicationRecord
  validates :user, presence: true
  belongs_to :user
end
