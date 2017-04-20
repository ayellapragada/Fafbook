class CreateProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :profiles do |t|
      t.references :user, foreign_key: true
      t.string :phone, default: ""
      t.string :education, default: ""
      t.string :website, default: ""
      t.string :language, default: ""
      t.string :location, default: ""
      t.string :work, default: ""
      t.string :relationship, default: ""

      t.timestamps
    end
  end
end
