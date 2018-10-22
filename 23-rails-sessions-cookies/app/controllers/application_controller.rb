class ApplicationController < ActionController::Base

  # method for a "cart"
  def cart
    session[:cart] ||= []
    # if session[:cart]
    #   session[:cart]
    # else
    #   session[:cart] = []
    # end
  end

  # method to add a nacho to a cart
  def add_nacho_to_cart(nacho_id)
    cart << nacho_id
  end


  # get the nachos with the cart and pass to controller to send to view
  def show_cart
    @cart_items = Nacho.find(cart)
  end


end
