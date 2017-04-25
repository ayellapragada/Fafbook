# == Schema Information
#
# Table name: mentions
#
#  id               :integer          not null, primary key
#  mentioner_type   :string
#  mentioner_id     :integer
#  mentionable_type :string
#  mentionable_id   :integer
#  created_at       :datetime
#

class Mention < Socialization::ActiveRecordStores::Mention
end
