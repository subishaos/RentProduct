class CreatePayments < ActiveRecord::Migration[5.0]
  def change
    create_table :payments do |t|
      t.references :purchase, foreign_key: true
      t.float :balance
      t.float :amount
      t.string :currency
    end
  end
end
