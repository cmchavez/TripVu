class SessionsController < ApplicationController
  def new
  end

  def create
    @authhash = request.env['omniauth.auth']
    @user = User.from_omniauth(@authhash)
    session[:user_id] = @user.id
    flash[:success] = "Welcome, #{@user.name}!"
  Rails.logger.debug(@authhash)
    redirect_to root_path
end


  def show
    redirect_to root_path unless session[:user_id]
    @auth = session[:user_id] 
    
    redirect_to users_path

end


def destroy
    session[:user_id] = nil
    redirect_to root_path
end
end

