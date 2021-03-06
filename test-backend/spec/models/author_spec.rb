require 'rails_helper'

RSpec.describe Author, type: :model do

  describe "Associations" do
    it { should have_many(:posts)}
  end

  describe "Validations" do
    it { should validate_presence_of(:name) }

  end

end
