# == Schema Information
#
# Table name: conversations
#
#  id           :integer          not null, primary key
#  sender_id    :integer
#  recipient_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Conversation < ActiveRecord::Base
  belongs_to :sender, :foreign_key => :sender_id, class_name: 'User'
  belongs_to :recipient, :foreign_key => :recipient_id, class_name: 'User'

  has_many :messages, dependent: :destroy

  after_create :start_conversation

  validates_uniqueness_of :sender_id, :scope => :recipient_id

  scope :between, -> (sender_id,recipient_id) do
    where("(conversations.sender_id = ? AND conversations.recipient_id =?) OR
          (conversations.sender_id = ? AND conversations.recipient_id =?)", 
          sender_id, recipient_id, recipient_id, sender_id)
  end 

  def start_conversation 
    self.messages.create(body: "#{User.find(self.sender_id).fname} says hi!", 
                      user_id: sender_id)
  end


end
