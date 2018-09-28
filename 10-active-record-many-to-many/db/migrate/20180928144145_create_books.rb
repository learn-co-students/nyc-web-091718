class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t| # table
      t.string :title
      t.string :isbn
      t.string :genre
      t.integer :library_id
    end
  end
end
