class Painting < ApplicationRecord
  belongs_to :gallery
  validates :name, presence: true

end
