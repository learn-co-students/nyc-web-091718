class Api::V1::PizzasController < ApplicationController
  def index
    @pizzas = Pizza.all
    render json: @pizzas, status: :ok
    # render json: @pizzas, status: 200 #same as :ok
  end

  def show # GET request to /api/v1/pizzas/:id
    @pizza = Pizza.find(params[:id])
    render json: @pizza, status: :ok
  end

  # def new #no longer need this since our forms will live on our JS client app
  #   #SHOW SOME ERB
  # end

  def create # POST request to api/v1/pizzas
    #CREATE A PIZZA
    # @pizza = Pizza.create(toppings: params[:toppings], sauce: params[:sauce], crust_type: params[:crust_type])
    @pizza = Pizza.create(pizza_params)
    render json: @pizza, status: :created
  end

  private

  def pizza_params
    params.require(:pizza).permit(:toppings, :sauce, :crust_type)
  end
end
