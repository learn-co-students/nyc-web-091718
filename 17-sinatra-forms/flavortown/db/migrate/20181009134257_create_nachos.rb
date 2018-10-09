class CreateNachos < ActiveRecord::Migration
  def change
    create_table :nachos do |t|
      t.string :name
      t.string :toppings
      t.integer :spicy
    end
  end
end
