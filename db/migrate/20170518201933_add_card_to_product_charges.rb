class AddCardToProductCharges < ActiveRecord::Migration[5.0]
  def change
    add_column :product_charges, :card, :string
  end
end
