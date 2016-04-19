class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :upvotes
  has_one :user
end
