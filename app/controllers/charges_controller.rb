class ChargesController < ApplicationController
	skip_before_filter  :verify_authenticity_token

	def new
	end

	def create
    respond_to do |format|
      format.html
	    @product_charge = ProductCharge.create(charge_params)
	    p @product_charge
			customer = Stripe::Customer.create(
				:email => @product_charge.email,
				#stripe token for the card id
				:card => @product_charge.card
			)

			charge = Stripe::Charge.create(
				:customer => customer.id,
				:amount => @product_charge.amount.to_i + 1500,
				:description => @product_charge.description,
				:currency => 'usd',
				:receipt_email => @product_charge.email
			)

			p charge

			redirect_to '/'  		
    end


	
	end

	private

  def charge_params
    params.require(:charge).permit(:card, :amount, :description, :email)
  end

end
