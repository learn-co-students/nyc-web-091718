require 'pry'

class Dog
  attr_accessor :name, :breed

  def initialize(name, breed)
    @name = name
    @breed = breed
  end
  # attr_writer :name
  # attr_reader :name

 # attr_ writer for @name
 # def name=(name)
 #   @name = name
 # end

 # attr_reader for @name
 # def name
 #   @name
 # end
 #
 # def breed=(breed)
 #   @breed = breed
 # end
 #
 # def breed
 #   @breed
 # end

end # end Dog class

binding.pry
