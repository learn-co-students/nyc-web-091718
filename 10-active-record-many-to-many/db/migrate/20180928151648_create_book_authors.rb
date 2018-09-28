class CreateBookAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :book_authors do |t| # table
      t.integer :book_id
      t.integer :author_id
    end
  end
end
