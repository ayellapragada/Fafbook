class CreateAlbums < ActiveRecord::Migration[5.0]
  def change
    create_table :albums do |t|
      t.references :user, foreign_key: true
      t.string :name, null: false
      t.text :description

      t.timestamps
    end
  end
end
