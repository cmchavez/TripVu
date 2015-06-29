module API
    class TripsController < ApplicationController
    	protect_from_forgery with: :null_session
    	def index
		    render json: Trip.all
		end
		def show
		    render json: Trip.find(params[:id])
		end
		def create
		    trip = Trip.new(trip_params)

		    if trip.save
		      render json: trip, status: 201, location: [:api, trip]
		    end
		end
		def update
	      trip = Trip.find(params[:id])
	      if trip.update(bowtie_params)
	        head 204
	      end
	    end

    private
	  def bowtie_params
	    params.require(:trip).permit(:location, :starting_time, :ending_time, :experiences, user_ids: [])
	  end

    end
 end