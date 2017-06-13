class PostSerializer < ActiveModel::Serializer

  attributes :id, :title, :body, :author_name
  belongs_to :author
end
