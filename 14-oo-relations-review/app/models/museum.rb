class Museum
  attr_accessor :name
  attr_reader :location, :artist, :graffiti_work

  @@all = []

  def self.all
    @@all
  end

  def initialize(name, location, artist, graffiti_work)
    @name = name
    @location = location
    @artist = artist
    @graffiti_work = graffiti_work

    @@all << self
  end
end
