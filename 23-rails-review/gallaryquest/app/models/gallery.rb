class Gallery < ApplicationRecord
  has_many :paintings, :dependent => :destroy
end
