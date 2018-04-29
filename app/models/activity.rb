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

class Activity < ApplicationRecord
  belongs_to :user
  has_many :events

  normalize_attributes :title, with: :squish

  scope :with_title, -> (title) {
    where("activities.title ilike ?", title.to_s.strip)
  }

  validates :title, :user_id, presence: true
  validates :title, uniqueness: true, case_sensitive: false
end
