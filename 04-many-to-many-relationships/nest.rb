class Nest
  attr_reader :squirrel, :tree
  attr_accessor :square_footage

  @@all = []

  def self.all
    @@all
  end

  # the squirrel instance
  # the tree instance
  def initialize(squirrel, square_footage, tree)
    @squirrel = squirrel
    @tree = tree
    @square_footage = square_footage

    @@all << self
  end

end
