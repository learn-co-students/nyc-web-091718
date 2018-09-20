class Tree
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
      nest.tree == self
    end
  end

  def my_squirrels
    # binding.pry
    self.my_nests.map do |nest|
      nest.squirrel
    end

  end
end # end of Tree class
