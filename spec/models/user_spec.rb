require 'rails_helper'

RSpec.describe User, type: :model do
  subject { FactoryGirl.build(:user) }

  describe 'validations' do
    it { should validate_presence_of :email }
    it { should validate_presence_of :fname }
    it { should validate_presence_of :lname }
    it { should validate_presence_of :date }
    # it { should validate_presence_of :month }
    it { should validate_presence_of :year }
    # it { should validate_presence_of :dob }
  end

end
