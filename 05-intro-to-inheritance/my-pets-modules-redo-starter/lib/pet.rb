class Pet
  attr_reader :name
  attr_accessor :mood

  def initialize(name)
    @num_lives = 1
    @name = name
    @mood = 'nervous'
  end

end
