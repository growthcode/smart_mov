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

FactoryBot.define do
  factory :activity do
    sequence :title do |n|
      "#{Faker::RickAndMorty.quote} (#{n})"
    end
    value { rand(1.0..20).round(2) }
    user { FactoryBot.create(:user) }

    trait :with_5_events do
      after(:create) do |activity|
        5.times do
          FactoryBot.create(:event, activity: activity)
        end
      end
    end
  end
end
