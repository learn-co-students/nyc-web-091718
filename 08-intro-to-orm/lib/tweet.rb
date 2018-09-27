class Tweet
  attr_accessor :message, :username
  ALL = []

  # Things inside the database
  def self.all
    # write something that takes all the data out
    # then creates instances
    if ALL.size == 0
      DB[:conn].execute("SELECT * FROM tweets").each do |db_tweet|
        # {"id"=>10,
        # "username"=>"hulk hogan",
        # "message"=>"like leg brother?",
        # 0=>10,
        # 1=>"hulk hogan",
        # 2=>"like leg brother?"}
        Tweet.new(db_tweet)
      end
    end
    ALL
  end

  def initialize(props={})
  # def initialize(message, username)
    # binding.pry
    # props.each do |k, v|
    @message = props['message']
    @username = props['username']
    ALL << self

    # Let's create here
    # but it makes us lose flexibility
  end

  # let us create a new instance and save all at the same time
  def self.create(props={})
    # new_tweet = Tweet.new(props)
    # new_tweet.save
    Tweet.new(props).save
  end

  def self.idontknowyet
    # Let's create here
  end

  # Oh, it just keeps inserting
  def save
    # binding.pry
    # DB[:conn].execute("INSERT ")
    # check to see if it was already run
    # => see if this particular instance, is already in the database
    # if
      # DB[:conn].execute("INSERT INTO tweets (username, message) VALUES ('#{self.username}', '#{self.message}')")
    # # HEREDOCs
    # each |k, v|
    # INSERT INTO tweets (#{k} + ,#{k}
    # end
    # each |k, v|
    # VALUES (v, ?)
    #
    sql = <<-SQL
    INSERT INTO tweets (username, message)
    VALUES (?, ?)
    SQL

    DB[:conn].execute(sql, self.username, self.message)
    # else
    #   # if it already exists, update instead
    # end
  end
end
