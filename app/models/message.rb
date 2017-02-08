class Message < ApplicationRecord
  validates :text, length: {minimum: 2, maximum: 200}, presence: true
  validates :guestname, length: {minimum: 2, maximum: 20}, presence: true
end
