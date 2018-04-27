# == Schema Information
#
# Table name: events
#
#  id          :bigint(8)        not null, primary key
#  value       :float
#  happened_at :datetime
#  activity_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'rails_helper'

RSpec.describe Event, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
