require 'pry'

class Store
  attr_accessor :status
  attr_reader :name, :location

  # sadly no
  @@all = []

  def initialize(name, location, status)
    # we're taking the value of name, assigning it to @name
    @name = name
    @location = location
    @status = status

    # self is the instance (.new)
    # it's actually the instance that was just made
    @@all << self

    # binding.pry
  end

  def shop
    # puts "Welcome to #{name}!"
    # puts "Welcome to #{@name}!"
    puts "Welcome to #{self.name}!"
    # self is a reference back to what this method was called on
    # binding.pry
  end

  def self.all
    @@all
  end

  # binding.pry
  # self over here was the class

end # end of Store class

all_the_stores = []

s1 = Store.new("Zara", "NY", "open")
all_the_stores << s1
s2 = Store.new("Nordstrom", "NJ", "open")
all_the_stores << s2


binding.pry
