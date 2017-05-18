class ProductChargesController < ApplicationController	
	skip_before_filter  :verify_authenticity_token

	def new

	end

	def create
    # have to refactor this to save the post
    @product_charge = ProductCharge.create(product_charge_params)

    p params

    respond_to do |format|
      format.json
    end

		customer = Stripe::Customer.create(
			:email => 'customer@thisthing.net',
			#stripe token for the card id
			:card => @product_charge.card
		)

		charge = Stripe::Charge.create(
			:customer => customer.id,
			:amount => @product_charge.amount,
			:description => @product_charge.description,
			:currency => 'usd'
		)

		redirect_to '/'  
	end

	private

  def product_charge_params
    params.require(:product_charge).permit(:card, :amount, :description)
  end

end
