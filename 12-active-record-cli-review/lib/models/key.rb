class Key < ActiveRecord::Base
  # screwed up real bad!
  # no relations!
  has_many :vulnerabilities
  has_many :users, through: :vulnerabilities
end
