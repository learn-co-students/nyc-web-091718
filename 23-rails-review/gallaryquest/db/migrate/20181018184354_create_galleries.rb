class CreateGalleries < ActiveRecord::Migration[5.2]
  def change
    create_table :galleries do |t|
      t.string :name
      t.integer :sqfootage
      t.string :location
      t.boolean :banksy_has_shredded_here

      t.timestamps
    end
  end
end
