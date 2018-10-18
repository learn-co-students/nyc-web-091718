class PaintingsController < ApplicationController

  def index
    if !!params[:search]
      gallery = Gallery.find_by(name: params[:search])
      @paintings = gallery.paintings
    else
      @paintings = Painting.all
    end
  end
  #
  # def search_results
  #   byebug
  #   @paintings = flash[:search]
  #   render 'search'
  # end

  def show
    @painting = Painting.find(params[:id])
  end

  def new
    @galleries = Gallery.all
    @painting = Painting.new
  end

  def create
    #attempt to save the painting to the database
    #ask the instance if it's valid or not
    #depending on that, either render the show page, or render errors

    @painting = Painting.create(painting_params)
    if @painting.valid?
      redirect_to painting_path(@painting)
    else
      flash[:error] = @painting.errors.full_messages
      redirect_to new_painting_path
    end

  end

  private

  def painting_params
    params.require(:painting).permit(:name, :value, :oil, :gallery_id)
  end

end

#collection_select args cheat sheet
#WITHIN a form_for
#arg 1: attribute of the object this will be assigned to (e.g. gallery_id)
#arg 2: collection of objects that will populate the collection select (e.g. Gallery.all)
#arg 3: attribute of those objects that will be assigned as the value (e.g. the id of the gallery instance)
#arg 4: attribute of those objects that will display in the option tag of the collection_select


#building a form to create a new painting that belongs to a gallery
#create the route to handle this feature
#build an action that can give us the proper view
#"new view"
#build out the actual form and all its logic
