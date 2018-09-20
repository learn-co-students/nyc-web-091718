require 'pry'

number = 1
1.class

class Fixnum
   def odd?
     true
   end
end

class Backer
  attr_accessor :name
  # attr_reader :name
  # attr_writer :name

  def initialize(name, item)
    @name = name
    @backed_projects = []
    @item = item
  end

  # def name
  #   @name
  # end
  #
  # def name=(name)
  #   @name = name
  # end

end

binding.pry
