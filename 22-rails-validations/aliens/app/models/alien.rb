class Alien < ApplicationRecord
  validates :name, presence: true
  validates :legs, numericality: { greater_than_or_equal_to: 0 }
end
