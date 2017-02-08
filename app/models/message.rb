class Message < ApplicationRecord
  validates :text, length: {minimum: 2, maximum: 200}, presence: true
  validates :name, length: {minimum: 2, maximum: 20}, presence: true
end
