class Trip < ActiveRecord::Base
	has_many: :tripusers
	has_many: :users, through: :tripusers
end
