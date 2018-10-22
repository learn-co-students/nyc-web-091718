class CreatePaintings < ActiveRecord::Migration[5.2]
  def change
    create_table :paintings do |t|
      t.string :name
      t.string :style
      t.string :artist
      t.integer :value
      t.boolean :oil
      t.integer :gallery_id

      t.timestamps
    end
  end
end
