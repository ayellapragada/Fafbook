# == Schema Information
#
# Table name: messages
#
#  id              :integer          not null, primary key
#  body            :text
#  conversation_id :integer
#  user_id         :integer
#  read            :boolean          default(FALSE)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Message < ActiveRecord::Base
  belongs_to :conversation, touch: true
  belongs_to :user

  validates_presence_of :body, :conversation_id, :user_id

  def message_time
    created_at.strftime("%m/%d/%y at %l:%M %p")
  end
end
