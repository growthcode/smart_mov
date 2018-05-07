# == Schema Information
#
# Table name: users
#
#  id                     :bigint(8)        not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :inet
#  last_sign_in_ip        :inet
#  first                  :string
#  last                   :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  provider               :string           default("email"), not null
#  uid                    :string           default(""), not null
#  tokens                 :text
#  graph_token            :string           not null
#

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  normalize_attributes :first, :last, with: :squish
  normalize_attributes :email, with: :squish do |value|
    value.to_s.downcase
  end

  has_many :activities, dependent: :destroy
  has_many :events, through: :activities
  after_create :create_default_activities
  before_validation -> { self.graph_token = SecureRandom.hex(8) }, if: 'graph_token.blank?'

  def create_default_activities
    Activity::DEFAULTS.each do |title, value|
      activities.create(title: title, value: value)
    end
  end
end
