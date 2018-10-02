class AddUrlColumnToVulnerabilities < ActiveRecord::Migration[5.0]
  def change
    add_column :vulnerabilities, :url, :string
  end
end
