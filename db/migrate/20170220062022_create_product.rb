class CreateProduct < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.references :user, foreign_key: true
      t.integer :purchase_id
      t.string :name
      t.string :description
      t.float :price
      t.boolean :live, default: false
      t.float :delivery_charge
      t.integer :category_id
      t.integer :cart_id
      t.integer :whishlist_id
    end
  end
end
