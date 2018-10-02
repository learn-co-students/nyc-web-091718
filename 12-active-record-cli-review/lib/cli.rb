
# RestClient.get https://api.github.com/search/users?q=ogonzaleznyc
# RestClient.get url , {params: {q: ogonzaleznyc}}

# make it work, make it right, make it fast
# make it work, make it pretty
# make it work, make it sexy



RestClient.get "https://api.github.com/search/code?q=api_key+in:file+user:rogerdavidvera"

def ask_for_username
  puts "What's your username on Gihub?"
  gets.chomp
end

# "ogonzaleznyc"
def lookup_username(username)
  url = "https://api.github.com/search/users"
  res = RestClient.get url, {params: {q: username}}
  hash = JSON.parse(res)
  user_info = hash['items'].first
  # TODO: multiple options, ask which user?
  store_in_database(user_info['login'], user_info['url'])
end

def store_in_database(username, url)
  # binding.pry
  User.create({ username: username, url: url})
  # TODO: I may have duplicates! Handle that.
end

# TODO: models don't make no sense, names for tables?
def ask_for_keys

end

def search_for_vulnerabilties

end



def run
  continue = 'yes'
  while continue == 'yes'
    username = ask_for_username
    lookup_username(username)
    puts "Another user? (yes/no)"
    continue = gets.chomp
  end
end
