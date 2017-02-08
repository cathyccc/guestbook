class Message < ApplicationRecord
  validates :text, length: {minimum: 2, maximum: 200}, presence: true
end
