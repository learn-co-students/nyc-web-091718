class GraffitiWork
  attr_reader :piece
  attr_accessor :price

  @@all = []

  def self.all
    @@all
  end

  def initialize(piece, price)
    @piece = piece
    @price = price

    @@all << self
  end
end
