# class ActiveRecord
#   def self.all
#     # change this to get from the database
#
#     # I want to get all the tweets from the database
#     DB[:conn].execute("SELECT * FROM #{self.to_s.downcase.pluralize}").each do |tweet_row|
#       tweet_instance = ALL.find do |tweet|
#         tweet.id == tweet_row['id']
#       end
#       if !!tweet_instance
#         # for any that have instances in ruby, ok, lets just make sure the data is correct or update in ruby
#         loop through our k, v
#         tweet_instance.username = tweet_row['username']
#         tweet_instance.message = tweet_row['message']
#       else
#         # for any that are not instances in ruby yet, let's make them
#         # {"id"=>12,
#         # "username"=>"Hulk!",
#         # "message"=>"Smash!",
#         # 0=>12,
#         # 1=>"Hulk!",
#         # 2=>"Smash!"}
#         Tweet.new(tweet_row)
#       end
#     end
#
#     ALL
#   end
# end

class Tweet
  attr_accessor :message, :username, :id
  ALL = []

  def self.all
    # change this to get from the database

    # I want to get all the tweets from the database
    DB[:conn].execute("SELECT * FROM tweets").each do |tweet_row|
      tweet_instance = ALL.find do |tweet|
        tweet.id == tweet_row['id']
      end
      if !!tweet_instance
        # for any that have instances in ruby, ok, lets just make sure the data is correct or update in ruby
        tweet_instance.username = tweet_row['username']
        tweet_instance.message = tweet_row['message']
      else
        # for any that are not instances in ruby yet, let's make them
        # {"id"=>12,
        # "username"=>"Hulk!",
        # "message"=>"Smash!",
        # 0=>12,
        # 1=>"Hulk!",
        # 2=>"Smash!"}
        Tweet.new(tweet_row)
      end
    end

    ALL
  end

  def initialize(props={})
    @message = props['message']
    @username = props['username']
    @id = props['id']
    ALL << self
  end

  # both create an instance, and save it to the database immediately
  def self.create(props={})
    # make a new instance
    # then save it
    Tweet.new(props).save
  end

  def save
    if !self.id
      # HEREDOC
      sql = <<-SQL
        INSERT INTO tweets (username, message)
        VALUES (?, ?);
      SQL

      # Malicious code!!! BAD!!!
      # a'); DROP TABLE tweets; --

      # creating a tweet
      DB[:conn].execute(sql, self.username, self.message)
      self.id = DB[:conn].execute("SELECT * FROM tweets").last['id']
    else
      sql = <<-SQL
        UPDATE tweets
        SET username = ?, message = ?
        WHERE id = ?;
      SQL
      # AND our updating a tweet
      DB[:conn].execute(sql, self.username, self.message, self.id)
    end
    self
  end
end
