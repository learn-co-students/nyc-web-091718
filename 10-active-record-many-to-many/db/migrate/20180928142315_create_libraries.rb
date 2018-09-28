class CreateLibraries < ActiveRecord::Migration[5.2]
  def change
    create_table :libraries do |t| # table
      t.column :name, :string
      t.column :location, :string
      t.column :status, :boolean
    end
  end
end
