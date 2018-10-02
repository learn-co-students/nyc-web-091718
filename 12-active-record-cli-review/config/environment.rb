require 'bundler'
Bundler.require

Dotenv.load

# What database to use. MySQL
ActiveRecord::Base.establish_connection( adapter: 'sqlite3', database: 'db/development.db')
require_all 'lib'

# YAML
# One of many different configuration file formats.
# .yml
# .json
# .???

# database:
#   adapter:
#   database:
