require_relative '../config/environment'

keys = ['api_key', 'secret_key', 'password', 'key']

keys.each do |key|
  Key.create({ name: key })
end

users = ['hysan', 'srscalia', 'rogerdavidvera', 'ogonzaleznyc']
users.each do |user|
  lookup_username(user)
end

# do searches for vulnerabilities
