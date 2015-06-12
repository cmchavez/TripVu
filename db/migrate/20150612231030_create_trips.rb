class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.string :location
      t.string :starting_time
      t.string :ending_time
      t.string :experiences

      t.timestamps null: false
    end
  end
end
