class AddAboutToProfile < ActiveRecord::Migration[5.0]
  def change
    add_column :profiles, :about, :string, default: "Hello!"
  end
end
