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

  def tweets
    # that returns an array of Tweet instances
    # Oh, the ones whose name matches me (the instance, self)
    # tweets = []
    # Tweet.all.each do |tweet|
    #   if tweet.username == self.username
    #     tweets << tweet
    #   end
    # end
    # tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end

    # get all of them
    # Tweet.all
  end

end # end User class
