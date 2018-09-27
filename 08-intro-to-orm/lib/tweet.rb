class Tweet
  attr_accessor :message, :username
  ALL = []

  def self.all
    ALL
  end

  def initialize(props={})
    @message = props['message']
    @username = props['username']
    ALL << self

    # Let's create here
    # but it makes us lose flexibility
  end

  def self.idontknowyet
    # Let's create here
  end

  def save
    binding.pry
    # DB[:conn].execute("")
  end
end
