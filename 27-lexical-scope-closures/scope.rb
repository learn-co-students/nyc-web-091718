# global vars

name = 'bill'

$global_name = 'berta'

puts name

puts global_name

# method vars

def say_name(name)
  puts "Name within the `say_name` method is #{name}"
end

def say_global_name
  puts "Global name is #{global_name}"
end

say_name(name)

say_global_name

hoisting
puts friends #friends has not been declared yet!

friends = 'Chandler Bing'

not_hoised()

def not_hoised
  puts 'i yam not hoisted lol'
end
