class AddColumnsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :fname, :string, null: false
    add_column :users, :lname, :string, null: false
    add_column :users, :date, :string, null: false
    add_column :users, :month, :string, null: false
    add_column :users, :year, :string, null: false
    add_column :users, :dob, :date, null: false
    add_column :users, :gender, :boolean, null: false
  end
end
