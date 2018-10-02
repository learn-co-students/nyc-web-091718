class User < ActiveRecord::Base
  has_many :vulnerabilities
  has_many :keys, through: :vulnerabilities
end
