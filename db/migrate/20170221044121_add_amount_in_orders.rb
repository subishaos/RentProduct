class AddAmountInOrders < ActiveRecord::Migration[5.0]
  def change
    add_column :orders, :total_amount, :float
    add_column :orders, :discount, :float
    add_column :orders, :amount_to_pay, :float
    add_column :orders, :pending_amount, :float
  end
end
