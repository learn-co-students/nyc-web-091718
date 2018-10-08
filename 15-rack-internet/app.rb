# module Rack
#   class Request
#     def initialize(env_hash)
#       @env_hash = env_hash
#     end
#   end
# end

require 'pry'
require_relative 'song'

class App
  def call(env)

    request = Rack::Request.new(env)
    resp = Rack::Response.new

    # TODO: create some new songs
    # Song.new('hit me baby one more time')
    # Song.new('thousand miles')
    # Song.new('puff the magic dragon')

    if request.path =~ /songs/
      # song_list_items = Song.all.map { |song| "<li>#{song.title}</li>" }.join

      resp.write("
          <h1>Bomb Song List</h1>
          <ul>
            <li> Hit me baby ONE MORE TIME</li>
            <li> notha cool song</li>
            <li> hate my job</li>
          </ul>
        ")


    # elsif req.path =~ /artists/
    elsif request.path.match(/artists/)
      resp.write('<h1>Artists List</h1>')
    else
      resp.write('<div>
        <h1>Not Found</h1>
        <img src="https://i.kym-cdn.com/entries/icons/original/000/023/677/Screen_Shot_2017-08-15_at_11.57.51_AM.png" />
        </div>')
    end
    resp.finish
  end
end
