class AddProfilePhotoToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :profile_photo, :string, default: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Guy_Fieri_at_Guantanamo_2.jpg/220px-Guy_Fieri_at_Guantanamo_2.jpg"
  end
end
