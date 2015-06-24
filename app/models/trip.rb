class Trip < ActiveRecord::Base
	has_many :tripusers
	has_many :users, through: :tripusers

	validates :location, presence: true
	validates :starting_time, presence: true
	validates :ending_time, presence: true
	# validates :experiences, presence: true
end
