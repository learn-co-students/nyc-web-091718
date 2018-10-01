module Persistable
  module ClassMethods

    def all
      binding.pry
      self::ALL
    end

    def clear_all
      self::ALL.clear
    end

  end

  module InstanceMethods
    def initialize(name)
      self.class.all << self
    end
  end

end
