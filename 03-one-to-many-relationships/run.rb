require 'pry'
require_relative './tweet'
require_relative './user'

u1 = User.new("Mike Cheng")
u2 = User.new("Zach")
u3 = User.new("Elbin")
u4 = User.new("Mike Cheng")

t1 = Tweet.new("hello world", u1)
t2 = Tweet.new("fake news", u1)
t3 = Tweet.new("cnn", u2)
t4 = Tweet.new("#cnn #fakenews", u3)

# u1.tweet(t1)
# u1.tweet(t2)



binding.pry
