class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first
      t.string :last
      t.string :email
      t.string :home
      t.integer :age

      t.timestamps null: false
    end
  end
end
