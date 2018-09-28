class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t| # table
      t.string :name
      t.date :dob
      t.string :country
    end
  end
end
