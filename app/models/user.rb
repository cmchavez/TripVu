class User < ActiveRecord::Base
	has_many: :tripusers
	has_many: :trips, through: :tripusers
end
