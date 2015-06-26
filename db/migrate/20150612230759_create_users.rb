class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first
      t.string :last
      t.string :email
      t.string :home
      t.integer :age
      t.string :provider, null:false
      t.string :uid, null: false
      t.timestamps null: false
    end
      add_index :users, :provider
      add_index :users, :uid
      add_index :users, [:provider, :uid], unique: true
  end
end
