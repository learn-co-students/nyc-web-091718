class NachoController < ApplicationController


  # See all me nachos' arr
  # index
  get '/nachos' do
    # ALL ME NACHOS
    @nachos = Nacho.all
    erb :"nachos/index"
  end

  # make a new nacho
  # new
  get '/nachos/new' do
    #show some sort of form for user input
    erb :"nachos/new"
  end

  # See all dem deets of ONE particular nacho
  # show
  get '/nachos/:id' do
    # touch the database for info
    @nacho = Nacho.find(params[:id])
    erb :"nachos/show"
  end


  # Save the nacho into DB
  # create
  # post '/nachos' do
  #   nacho = Nacho.create(params)
  #   redirect "/nachos/#{nacho.id}"
  # end

  # edit a nacho
  # edit
  get '/nachos/:id/edit' do
    @nacho = Nacho.find(params[:id])
    erb :"nachos/edit"
  end

  # save the edits to the db
  # update

  patch '/nachos/:id' do
    @nacho = Nacho.find(params[:id])
    @nacho.update_attributes(name: params[:name], toppings: params[:toppings], spicy: params[:spicy])
    redirect "/nachos/#{@nacho.id}"
  end

  # BLAST THE NACHO AWAY
  # Destroy





end
