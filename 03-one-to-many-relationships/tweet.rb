class Tweet
  attr_reader :message, :user

  @@all = []

  def initialize(message, user) # user_object_id)
    @message = message
    @user = user
    # how do I figure that out?

    @@all << self
  end

  def self.all
    @@all
  end

  # if we want to delete a tweet, class or instance method?
  # def self.delete
  # def delete

end # end Tweet class
