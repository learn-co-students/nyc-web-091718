class CreateTacos < ActiveRecord::Migration[5.2]
  def change
    create_table :tacos do |t|
      t.string :name
      t.string :ingredients

      t.timestamps
    end
  end
end
