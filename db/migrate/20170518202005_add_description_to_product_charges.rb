class AddDescriptionToProductCharges < ActiveRecord::Migration[5.0]
  def change
    add_column :product_charges, :description, :string
  end
end
