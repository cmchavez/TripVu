  require "rails_helper"

RSpec.describe TripsController, :type => :controller do
  	before(:each) do
	    @trip1 = Trip.create(location:"London", starting_time: "7/3/15", ending_time: "7/10/15", experiences: "London Eye")
	    @trip2 = Trip.create(location:"London", starting_time: "7/3/15", ending_time: "7/10/15", experiences: "London Eey")
  	end

	describe "GET #index " do
	    before :each do
	      		get :index
	    end
	    it "renders the index template" do
	      expect(response).to render_template("index") 
	    end
	    it "response should be a success" do
	      expect(response).to have_http_status(200)
	    end
	    it "assigns @trips to include trips" do
	      expect(assigns(:trips)).to include(@trip1, @trip2)
	    end
  	end

  	describe "GET #show" do
    	before :each do
      		get :show, id: @trip1.id
    	end
	    it "renders the show template" do
	      expect(response).to have_http_status(200)
	      expect(response).to render_template :show
	    end

	    it "assigns a trip to @trip" do
	      expect(assigns(:trip)).to eq(@trip1)
	    end
  	end

  	describe "GET #new" do
    	before do
      		get :new
    	end
	    it "renders the new template with status 200 " do
	      expect(response).to render_template :new
	      expect(response).to have_http_status(200)
	    end
	    it "is not persisted" do
	      expect{Trip.new}.to change(Trip, :count).by(0)
	    end
  	end

  	describe "POST #create" do
	    it "persists a trip to the DB" do
	      expect {Trip.create}.to change(Trip, :count).by(0)
	    	end
  	end



end 