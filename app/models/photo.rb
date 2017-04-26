# == Schema Information
#
# Table name: photos
#
#  id                   :integer          not null, primary key
#  album_id             :integer
#  caption              :text
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  picture_file_name    :string
#  picture_content_type :string
#  picture_file_size    :integer
#  picture_updated_at   :datetime
#

class Photo < ApplicationRecord
  validates :album, :user, presence: true

  belongs_to :album
  delegate :user, to: :album, allow_nil: true

  has_attached_file :picture, default_url: "defaults/photo_default.png"
  validates_attachment_content_type :picture, content_type: /\Aimage\/.*\z/
end

