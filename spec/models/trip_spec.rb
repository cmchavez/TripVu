require 'rails_helper'
	
RSpec.describe Trip, type: :model do 
	it "is invalid without a location" do
		trip = Trip.new(location: nil, starting_time: "6/23/15", ending_time: "6/25/15", experiences: "Louvre")
		expect(trip).to be_invalid
	end

	it "is invalid without a starting date" do
		trip = Trip.new(location: "Paris", starting_time: nil, ending_time: "6/25/15", experiences: "Louvre")
		expect(trip).to be_invalid
	end

	it "is invalid without a ending date" do
		trip = Trip.new(location: "Paris", starting_time: "6/23/15", ending_time: nil, experiences: "Louvre")
		expect(trip).to be_invalid
	end

	

end