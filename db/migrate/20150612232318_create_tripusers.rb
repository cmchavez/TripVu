class CreateTripusers < ActiveRecord::Migration
  def change
    create_table :tripusers do |t|
      t.belongs_to :trip, index: true, foreign_key: true
      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
