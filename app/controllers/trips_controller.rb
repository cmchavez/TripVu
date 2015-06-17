class TripsController < ApplicationController
  def index
    @trips = Trip.all
  end

  def show
    @trip = Trip.find(params[:id])
  end

  def new
    @trip = Trip.new
  end

  def create
    # @trip = Trip.new(trip_params)
    # if @trip.save
    #   redirect_to trips_path
    # else 
    #   render :new
    # end 
  end

  def edit
    @trip = Trip.find(params[:id])
  end

  def update
    @trip = Trip.find(params[:id])
      if @trip.update_attributes(trip_params)
      else 
        render 'edit'
      end 
  end

  def destroy
    @trip = Trip.find(params[:id])
    @trip.destroy
  end


private
  def trip_params
    params.require(:trip).permit(:location, :starting_time, :ending_time, :experiences, user_ids: [])
  end
end
