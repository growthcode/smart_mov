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
  has_one :user, through: :activity

  validates :activity_id, presence: true

  after_create :set_happened_at, if: Proc.new { |e| e.happened_at.blank? }

  def set_happened_at
    update(happened_at: created_at)
  end
end
