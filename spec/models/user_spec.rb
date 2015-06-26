# require 'rails_helper'
	
# RSpec.describe User, type: :model do 
# 	it "is invalid without a first name" do
# 		user = User.new(first: nil, last: "Smith", email: "roger@example.com", home: "Los Angeles", age: 29)
# 		expect(user).to be_invalid
# 	end

# 	it "is invalid without a last name" do
# 		user = User.new(first: "John", last: nil, email: "roger@example.com", home: "Los Angeles", age: 29)
# 		expect(user).to be_invalid
# 	end

# 	it "is invalid without a email name" do
# 		user = User.new(first: "John", last: "Smith", email: nil, home: "Los Angeles", age: 29)
# 		expect(user).to be_invalid
# 	end

# 	it "is invalid without a home name" do
# 		user = User.new(first: "John", last: "Smith", email: "roger@example.com", home: nil, age: 29)
# 		expect(user).to be_invalid
# 	end

# 	it "is invalid without user age" do
# 		user = User.new(first: "John", last: "Smith", email: "roger@example.com", home: "Los Angeles", age: nil)
# 		expect(user).to be_invalid
# 	end

# 	it "is invalid if a user tries to sign up with an email that already exists in the db, regardless of capitalization" do
# 	  user1 = User.create(first: "John", last: "Smith", email: "john@example.com", home: "Los Angeles", age: 21)
# 	  user2 = User.new(first: "John", last: "Smith", email: "john@example.com", home: "Los Angeles", age: 21)
# 	  user3 = User.new(first: "John", last: "Smith", email: "JOHN@example.com", home: "Los Angeles", age: 21)
# 	  expect(user1).to be_valid
# 	  expect(user2).to be_invalid
# 	  expect(user3).to be_invalid
# 	end
	

# end


