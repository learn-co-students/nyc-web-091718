require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end
# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console

a1 = Artist.new("a1")
a2 = Artist.new("a2")
a3 = Artist.new("a3")
a4 = Artist.new("a4")
a5 = Artist.new("a5")

gw1 = GraffitiWork.new("gw1", 10)
gw2 = GraffitiWork.new("gw2", 10)
gw3 = GraffitiWork.new("gw3", 10)
gw4 = GraffitiWork.new("gw4", 10)
gw5 = GraffitiWork.new("gw5", 10)

m1 = Museum.new("m1", "NY", a1, gw1)
m2 = Museum.new("m2", "NY", a1, gw2)
m3 = Museum.new("m3", "NY", a1, gw3)

m4 = Museum.new("m4", "NY", a3, gw1)
m5 = Museum.new("m5", "NY", a3, gw3)
m6 = Museum.new("m6", "NY", a3, gw5)


binding.pry
0 #leave this here to ensure binding.pry isn't the last line
