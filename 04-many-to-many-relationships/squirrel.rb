class Squirrel
  attr_reader :name
  attr_accessor :age, :color

  @@all = []

  def self.all
    @@all
  end

  def initialize(name, age, color)
    @name = name
    @age = age
    @color = color

    @@all << self
  end

  def my_nests
    Nest.all.select do |nest|
      nest.squirrel == self
    end
  end

  def my_trees
    # binding.pry
    self.my_nests.map do |nest|
      nest.tree
    end

  end
end # end of Squirrel class
