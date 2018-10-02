class CreateVulnerabilities < ActiveRecord::Migration[5.0]
  def change
    create_table :vulnerabilities do |t|
      t.integer :user_id
      t.integer :key_id
    end
  end
end
