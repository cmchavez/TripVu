class SessionsController < ApplicationController
  def new
  end

  def create
    @auth = request.env['omniauth.auth']
    session['auth'] = @auth
    redirect_to sessions_show_path
end


  def show
    redirect_to root_path unless session['auth']
    @auth = session['auth'] 
    
    redirect_to users_path

end


def destroy
    session['auth'] = nil
    redirect_to root_path
end
end

