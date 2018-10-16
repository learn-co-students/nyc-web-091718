class CreaturesController < ApplicationController

  before_action :find_creature, only:[:show, :edit, :update, :destroy]

  def index
    #code
    @creatures = Creature.all
    render 'index'
  end

  def show
    render 'show'
  end

  def new
    # some form
    @creature = Creature.new
    render 'new'
  end

  def create
    # byebug
    @creature = Creature.create(creature_params)
    redirect_to creature_path(@creature)
  end

  def edit
    #get creature from DB
    render 'edit'
  end

  def update

    @creature.update(creature_params)
    redirect_to creature_path(@creature)
  end

  def destroy
    #link_to
    #button_to
    #form_for
      #submit_tag
    @creature.destroy
    redirect_to creatures_path
  end

  private
  #strong params 💪
  # need to whitelist my atributes cause of dem HAx0rZZ
  def creature_params
    params.require(:creature).permit(:name, :species, :num_legs)
  end

  def find_creature
    @creature = Creature.find_by(id: params[:id])
  end


end
