class User < ActiveRecord::Base
	has_many :tripusers
	has_many :trips, through: :tripusers

	validates :first, presence: true
	validates :last, presence: true
	validates :email, presence: true
	validates :home, presence: true
	validates :age, presence: true
	validates :email, presence: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }, uniqueness: {case_sensitive: false }

end

