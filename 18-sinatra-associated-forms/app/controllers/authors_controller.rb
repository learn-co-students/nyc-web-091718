class AuthorsController < ApplicationController
  # Index
  get '/authors' do
    @authors = Author.all
    erb :'authors/index'
  end

  # New
  get '/authors/new' do
    erb :"authors/new"
  end

  # Show
  get '/authors/:id' do
    @author = Author.find(params[:id])
    erb :'authors/show'
  end



  # Create
  post '/authors' do
    author = Author.create(params)
    redirect "/authors/#{author.id}"
  end

  # Edit
  get '/authors/:id/edit' do
    @author = Author.find(params[:id])
    erb :"authors/edit"
  end

  # Update
  patch '/authors/:id' do
    author = Author.find(params[:id])
    author.update(params[:author])
    redirect "/authors/#{author.id}"
  end


  # Delete

end
