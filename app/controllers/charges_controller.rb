class ChargesController < ApplicationController
# PUBLISHABLE_KEY=pk_test_rpoW1XqBjFA2qFKKh2RgCPH1 SECRET_KEY=sk_test_OPZtoZKSucpvXWBMY6aHjAcH foreman start -f Procfile.dev

	skip_before_filter  :verify_authenticity_token
	def new
	end

	def create
    respond_to do |format|
      format.html
	    @product_charge = ProductCharge.create(charge_params)
	    
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


	
	end

	private

  def charge_params
    params.require(:charge).permit(:card, :amount, :description)
  end

end
