require "rails_helper"

RSpec.describe UsersController do 
	describe "new action in user controller" do
		it "creates a user with a name" do
      	user1 = User.new(first: "john", last: "ward", email: "john@john.com", home:"Santa Monica", age: 27)
      	expect(user1.first).to eq("john")
    	end
  	end

	describe "GET #index" do
		subject { get :index}
		it "displays the user index page" do
			expect(subject).to render_template(:index)
			expect(subject).to render_template("index")
			expect(subject).to render_template("users/index")
		end

		
	end

	
	



end
	