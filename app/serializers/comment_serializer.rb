class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :upvotes
end
