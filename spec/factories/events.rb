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

FactoryBot.define do
  factory :event do
    value { rand(1.0..20).round(2) }
    happened_at { Time.at(rand(1.week.ago.to_i..DateTime.current.to_i)) }
    activity_id 1

    trait :with_activity do
      activity_id { FactoryBot.create!(:activity).id }
    end
  end
end
