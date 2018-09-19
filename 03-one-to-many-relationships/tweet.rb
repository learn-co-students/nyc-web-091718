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

  # def user
  #   # returns an instance of the user class
  #   # self.user @user user
  #   binding.pry
  # end

  def username
    # binding.pry
    self.user.username
  end

  # if we want to delete a tweet, class or instance method?
  # def self.delete
  # def delete

end # end Tweet class
