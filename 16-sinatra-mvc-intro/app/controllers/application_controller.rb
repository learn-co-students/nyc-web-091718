class ApplicationController < Sinatra::Base
  set :views, 'app/views'
  set :method_override, true

  # TODO create a route to root/home render home
  get '/' do
    erb :home
  end

  # TODO all books
  # Index page for Books
  get '/books' do
    @books = Book.all
    erb :books
  end


  # TODO Individual book
  get '/books/:id' do
    @book = Book.find(params[:id])
    erb :book
  end



end
