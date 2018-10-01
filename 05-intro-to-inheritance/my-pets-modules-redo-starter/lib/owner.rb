require_relative './persistable'
class Owner
  attr_accessor :name
  extend Persistable::ClassMethods
  include Persistable::InstanceMethods

  ALL = []

end

#return all the owners
#in its initialize method, to add the owner instance to the ALL array
#clear all the owners
