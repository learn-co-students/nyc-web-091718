class BooksController < ApplicationController
  # Index


  # New
  get '/books/new' do
    @authors = Author.all
    erb :"books/new"
  end

  # Show


  # Create
  post '/books' do
    book = Book.create(params[:book])
    redirect "/books/#{book.id}"
  end

  # Edit


  # Update


  # Delete

end
