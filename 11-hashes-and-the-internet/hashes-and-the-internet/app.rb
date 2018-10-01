require 'rest-client'
require 'pry'
require 'json'

# url = "https://www.googleapis.com/books/v1/volumes?q=ruby+programming"
url = "https://www.googleapis.com/books/v1/volumes?q="

#method to get response
#method to print out the books

def get_response(url)
  response = RestClient.get(url)
  results = JSON.parse(response)
  books = results['items']
end

def print_books(books)
  books.each do |book|
    print_book(book)
  end
end

def print_book(book)
  puts "*" * 30
  puts book['volumeInfo']['title']
  puts book['volumeInfo']['authors'].join(' & ')
end

#cli

puts "welcome!"
#welcome user
puts "enter search type"
search_type = gets.chomp
#start of author or book search option
# if search_type = "a"
#   #search by author
#   puts "enter your author"
#   author = gets.chomp
# elsif search_type = "b"
#   #search by book
# end
##########################
#get search term
query = url + search_term.split(' ').join('+')
#define url
books = get_response(query)
#make request
print_book(books.sample)

#books.sample
#
#print out all the books
puts "there you go!"








#app deliverables
#print out the results of a search
#recommend a random book from a search
#suggestion from a previous read

binding.pry

puts "hi!"
