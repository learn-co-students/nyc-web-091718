class User < ApplicationRecord
  has_many :user_songs
  has_many :songs, through: :user_songs
  has_secure_password
  #
  # def password
  #   @password
  # end
  #
  # def password=(plaintext_pw)
  #   self.password_digest = BCrypt::Password.create(plaintext_pw)
  # end
  #
  #
  # def authenticate(plaintext_pw)
  #   BCrypt::Password.new(self.password_digest) == plaintext_pw
  # end

end
