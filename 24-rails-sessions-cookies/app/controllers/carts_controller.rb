class CartsController < ApplicationController

  def update
    # session[:nacho_ids] << params[:nacho_id]
    add_nacho_to_cart(params[:nacho_id])
    flash[:message] = "Added #{params[:nacho_name]} to cart"
    # byebug
    redirect_to nachos_path
  end

end
