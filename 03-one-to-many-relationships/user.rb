class User
  attr_accessor :username #, :tweets

  def initialize(username)
    @username = username
    # @tweets = []
  end

  def post_tweet(message)
    # takes a message,
    # creates a new tweet,
    # and adds it to the user's tweet collection
    new_tweet = Tweet.new(message, self)
    # @tweets << new_tweet
  end



end # end User class
