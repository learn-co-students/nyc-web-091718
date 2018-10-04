class Artist
  # difference?
  # attr_accessor
  attr_reader :name # it makes your getters for you
  # attr_writer # it makes your setters for you

  @@all = []
  # ALL = [] # prevents you from reassigning ALL to another value

  def self.all
    @@all
  end

  def initialize(name)
    @name = name

    @@all << self
  end

  def self.num_artists
    self.all.count
  end

  def rename(new_name)
    @name = new_name
  end

  # find ONE
  def self.find_by_name(name)
    # need to look at every artist == loop / iterate
    # which artist matches that name
    self.all.find do |artist|
      artist.name == name
    end
  end

  # find is for finding ONE thing
  # select is for picking thingsSSS out
  # map is for transforming data => [] => [] of the same length
  def my_graffiti_works
    # look at all the museums
    # find the ones I'm in
    my_museums = Museum.all.select do |museum|
      museum.artist == self
    end

    # then get all the graffiti works from those museums
    my_museums.map do |museum|
      museum.graffiti_work
    end
  end

  # max whatever
  # least whatever

  def my_worth
    # averages!!!
    # sum / number of things
    # get all dem numbers
    # find the sum
    # divide that sum by the number of htings
    # my_graffiti_works.map .each .reduce / inject
    sum = 0
    my_graffiti_works.each do |gw|
      sum = sum + gw.price
    end
    sum / my_graffiti_works.count # size, length

    my_prices = my_graffiti_works.map do |gw|
      gw.price
    end
    my_prices.reduce(:+) / my_prices.count # float

    sum = my_graffiti_works.reduce do |sum, gf|
      sum + gf.price
    end
    sum / my_graffiti_works.count # size, length

  end

  def make_new_graffiti_work(piece, price, )
    gw = GraffitiWork.new(piece, price)
    Museum.new("m1", "NY", self, gw)
  end

end
