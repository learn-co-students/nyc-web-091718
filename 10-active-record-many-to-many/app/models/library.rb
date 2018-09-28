class Library < ActiveRecord::Base
  has_many :books
  # what if i want to know all the authors in a library?
  has_many :authors, through: :books
end
