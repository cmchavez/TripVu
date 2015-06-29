class TripsController < ApplicationController
  protect_from_forgery with: :null_session
  def index
    # @trips = Trip.all
  end

  def show
    @trip = Trip.find(params[:id])
    @bus = []
    params = { term: 'attractions',
           limit: 20,
           sort: 0
         }
    @activities =  Yelp.client.search(@trip.location, params)

    @activities.businesses.each do |busi|
      data = [busi.name, busi.rating_img_url_small, busi.image_url, busi.url, busi.id]
      @bus.push(data)
     end
    @dates = [@trip.starting_time, @trip.ending_time] 
  end

  def new
    @trip = Trip.new

  end

  def create
    @trip = Trip.new(trip_params)
   
    if @trip.save
      
      redirect_to trip_path(@trip.id)

    else 

      render :index
    end 
  end

  def edit
    @trip = Trip.find(params[:id])

  end

  def update
    @trip = Trip.find(params[:id])
      
      if @trip.update_attributes(trip_params)
        redirect_to user_path
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
