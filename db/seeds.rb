# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u = User.find_by(email: 'admin@gmail.com') || FactoryBot.create(:user, email: 'admin@gmail.com')
15.times do
  FactoryBot.create(:activity, :with_5_events, user: u)
end
