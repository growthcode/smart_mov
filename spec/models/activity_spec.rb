# == Schema Information
#
# Table name: activities
#
#  id         :bigint(8)        not null, primary key
#  title      :string
#  favorite   :boolean
#  value      :float
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Activity, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
