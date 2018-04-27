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

class Event < ApplicationRecord
  belongs_to :activity
end
