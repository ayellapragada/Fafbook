class RemovePictureFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :profile_picture_file_name
    remove_column :users, :profile_picture_content_type
    remove_column :users, :profile_picture_file_size
    remove_column :users, :profile_picture_updated_at
  end
end
