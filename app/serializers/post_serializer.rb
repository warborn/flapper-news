class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :link, :upvotes
  has_many :comments
  has_one :user
end
