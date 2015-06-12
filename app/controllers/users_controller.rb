class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id.to_s
      redirect_to users_path
    else
      render :new
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    

      if @user.update_attributes(params.require(:user).permit(:first, :last, :email, :home, :age, :trip_ids)
      end

  end

  def destroy
      @user = User.find(params[:id])
      @user.destroy
      
      redirect_to users_path
  end
private
  def user_params
    params.require(:user).permit(:first, :last, :home, :age, trip_ids: [])
  end
end
