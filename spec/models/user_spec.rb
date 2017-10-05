require 'rails_helper'

RSpec.describe User, type: :model do
  subject { FactoryGirl.build(:user) }
  let(:real_user) { FactoryGirl.create(:user) }

  describe 'validations' do
    it { should validate_presence_of :email }
    it { should validate_presence_of :fname }
    it { should validate_presence_of :lname }
    it { should validate_presence_of :date }
    it { should validate_presence_of :year }
  end

  describe 'fix_names' do
    it 'should remove spaces before and after a name' do
      expect(real_user.fname).to eq('Akshith')
    end
  end

  # describe 'auth' do
  #   it 'should not save password to database' do
  #     expect(real_user.password).to be_nil
  #   end
  # end

end
