class AddEmailToProductCharges < ActiveRecord::Migration[5.0]
  def change
    add_column :product_charges, :email, :string
  end
end
