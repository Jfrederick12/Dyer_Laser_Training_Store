class CreateProductCharges < ActiveRecord::Migration[5.0]
  def change
    create_table :product_charges do |t|

      t.timestamps
    end
  end
end
