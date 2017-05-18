class AddAmountToProductCharges < ActiveRecord::Migration[5.0]
  def change
    add_column :product_charges, :amount, :string
  end
end
