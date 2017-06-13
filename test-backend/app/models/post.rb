class Post < ApplicationRecord
  validates :title, :body, :author, presence: true

  belongs_to :author

  delegate :name, to: :author, allow_nil: true, prefix: true
end
