# == Schema Information
#
# Table name: activities
#
#  id         :bigint(8)        not null, primary key
#  title      :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :title
end
