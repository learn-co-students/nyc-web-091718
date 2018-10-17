class AliensController < ApplicationController
  before_action :find_alien, only:[:show,:edit,:update,:destroy]

  def index
    @aliens = Alien.all
  end

  def show
  end

  def new
    @alien = Alien.new
    render 'new'
  end

  def create

    @alien = Alien.create(alien_params)
      if @alien.valid?
        redirect_to alien_path(@alien)
      else
        flash[:error] = @alien.errors.full_messages
        # render 'new'
        redirect_to new_alien_path
      end

  end

  def edit
  end

  def update

     @alien.update(alien_params)
      if @alien.valid?
        redirect_to alien_path(@alien)
      else
        flash[:error] = @alien.errors.full_messages
        # render 'new'
        redirect_to edit_alien_path
      end

  end

  def destroy
  end


private

  def alien_params
    params.require(:alien).permit(:name,:description,:legs,:planet,:eats_humans)
  end

  def find_alien
    @alien = Alien.find_by(id: params[:id])
  end

end #end Alien class
