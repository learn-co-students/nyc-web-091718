class SessionsController < ApplicationController
  skip_before_action :authorized, only: [:new, :create]

  def new
    #render the sign in form
  end


  def create
      @user = User.find_by(username: params[:username])
      if @user && @user.authenticate(params[:password])
        session[:user_id] = @user.id
        redirect_to @user
      else
        flash[:error] = 'Username OR Password is invalid'
        redirect_to login_path
      end
  end

  def destroy
    # session[:user_id] = nil
    session.delete(:user_id)
    redirect_to login_path
  end
end
