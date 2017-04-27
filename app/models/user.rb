# == Schema Information
#
# Table name: users
#
#  id                         :integer          not null, primary key
#  email                      :string           not null
#  password_digest            :string           not null
#  session_token              :string           not null
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#  fname                      :string           not null
#  lname                      :string           not null
#  date                       :string           not null
#  month                      :string           not null
#  year                       :string           not null
#  dob                        :date             not null
#  gender                     :boolean          not null
#  profile_photo_file_name    :string
#  profile_photo_content_type :string
#  profile_photo_file_size    :integer
#  profile_photo_updated_at   :datetime
#  cover_photo_file_name      :string
#  cover_photo_content_type   :string
#  cover_photo_file_size      :integer
#  cover_photo_updated_at     :datetime
#  full_name                  :string
#

class User < ApplicationRecord
  attr_reader :password

  validates :email, :password_digest, :session_token, presence: true
  validates :fname, :lname, :date, :month, :year, :dob, presence: true
  validates :gender, inclusion: { in: [true, false] }
  validates :password, length: { minimum: 6, allow_nil: true }

  def set_picture_respect_to_gender
    self.gender? ? "defaults/male_default.jpg" : "defaults/female_default.jpg"
  end

  has_attached_file :profile_photo, default_url: :set_picture_respect_to_gender
  validates_attachment_content_type :profile_photo, content_type: /\Aimage\/.*\Z/
  has_attached_file :cover_photo, default_url: "defaults/cover_default.jpg"
  validates_attachment_content_type :profile_photo, content_type: /\Aimage\/.*\Z/

  has_friendship
  acts_as_liker

  has_one :profile, dependent: :destroy
  has_many :albums, dependent: :destroy
  has_many :photos, through: :albums
  has_many :posts, class_name: "Post", foreign_key: 'author_id'
  has_many :posts_about, class_name: "Post", foreign_key: 'receiver_id'

  after_initialize :ensure_session_token
  before_validation :create_dob
  after_create :fix_names, :create_dependencies


  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by email: email
    return user if user && user.valid_password?(password)
    nil
  end

  def create_dependencies
    unless self.profile
      Profile.create(user_id: self.id)
    end
    unless self.albums.find_by(name: 'Timeline') && 
        self.albums.find_by(name: 'Profile') 
      Album.create(user_id: self.id, name: 'Timeline')
      Album.create(user_id: self.id, name: 'Profile')
    end
  end

  def create_dob
    return if self.date == "" && self.month == "" && self.year == ""
    self.dob = Date.parse("#{self.date}-#{self.month}-#{self.year}")
  end

  def fix_names
    self.fname = self.fname.strip.capitalize
    self.lname = self.lname.strip.capitalize
    self.full_name = "#{fname} #{lname}"
    self.save
  end

  def create_full_name
  end

  def valid_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password= password
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end
end
