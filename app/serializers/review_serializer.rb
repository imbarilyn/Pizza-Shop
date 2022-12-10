class ReviewSerializer < ActiveModel::Serializer
  attributes :comment, :user_id, :pizzerium_id
end
