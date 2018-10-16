class CreateCreatures < ActiveRecord::Migration[5.2]
  def change
    create_table :creatures do |t|
      t.string :species
      t.string :name
      t.integer :num_legs
      t.boolean :eats_humans

      t.timestamps
    end
  end
end
