# == Schema Information
#
# Table name: profiles
#
#  id           :integer          not null, primary key
#  user_id      :integer
#  phone        :string           default("")
#  education    :string           default("")
#  website      :string           default("")
#  language     :string           default("")
#  location     :string           default("")
#  work         :string           default("")
#  relationship :string           default("")
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Profile < ApplicationRecord
  validates :user, presence: true
  belongs_to :user
end
