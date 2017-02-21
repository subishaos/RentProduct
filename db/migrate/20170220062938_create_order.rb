class CreateOrder < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.integer :status
      t.references :product, foreign_key: true
    end
  end
end
