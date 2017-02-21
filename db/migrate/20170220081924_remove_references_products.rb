class RemoveReferencesProducts < ActiveRecord::Migration[5.0]
  def change
    remove_reference(:products, :purchase, index: false)
  end
end
