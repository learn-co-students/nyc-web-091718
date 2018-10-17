class CreateAliens < ActiveRecord::Migration[5.2]
  def change
    create_table :aliens do |t|
      t.string :name
      t.string :description
      t.integer :legs
      t.string :planet
      t.boolean :eats_humans

      t.timestamps
    end
  end
end
