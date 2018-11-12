class CreatePizzas < ActiveRecord::Migration[5.2]
  def change
    create_table :pizzas do |t|
      t.string :toppings
      t.string :crust_type
      t.string :sauce

      t.timestamps
    end
  end
end
