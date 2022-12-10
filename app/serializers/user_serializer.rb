class UserSerializer < ActiveModel::Serializer
  attributes :username, :passowrd_digest
end
