class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.text :body, null: false;
      t.references :author, index: true, foreign_key: { to_table: :users }
      t.references :receiver, index: true, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
