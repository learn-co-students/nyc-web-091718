class CreatePizzas < ActiveRecord::Migration[5.2]
  def change
    create_table :pizzas do |t|
      t.string :toppings
      t.integer :size
      t.boolean :slices_left

      t.timestamps
    end
  end
end
