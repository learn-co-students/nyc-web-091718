require_relative './pet'

class Cat < Pet

  def initialize(name)
    @num_lives = 9
    super
    binding.pry
  end

end
