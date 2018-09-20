require 'pry'

require_relative './squirrel.rb'
require_relative './tree.rb'
require_relative './nest.rb'


s1 = Squirrel.new("Michael", 800, "hot pink")
s2 = Squirrel.new("Bruce", 2, "green")

t1 = Tree.new("Michael", 800, "hot pink")
t2 = Tree.new("Bruce", 2, "green")

n1 = Nest.new(s2, 9001, t1)
n2 = Nest.new(s1, 9001, t1)
n3 = Nest.new(s1, 9001, t2)

binding.pry

true
