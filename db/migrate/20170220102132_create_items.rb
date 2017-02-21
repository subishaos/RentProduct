class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.references :order, foreign_key: true
      t.integer :status
      t.integer :count
      t.references :product, foreign_key: true

      t.timestamps
    end
  end
end
