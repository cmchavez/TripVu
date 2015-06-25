require "rails_helper"

RSpec.describe UsersController do 
	describe "GET #index" do
		subject { get :index}

		it "displays the user index page" do
			expect(subject).to render_template(:index)
			expect(subject).to render_template("index")
			expect(subject).to render_template("users/index")
		end
	end

		it ""

end