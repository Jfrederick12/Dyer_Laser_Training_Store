import PropTypes from 'prop-types';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import React, { Component } from 'react';
import VideoModal from './VideoModal';

class ProductContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product: this.props.product,
			token: ''
		}
		this.onToken = this.onToken.bind(this)
	}

  onToken(token) {
    console.log(token)
    // console.log(JSON.stringify(token))
    this.state.token = (token.id)
	    axios.post('/charges', {
	      card: this.state.token,
	      amount: this.state.product.chargeAmount,
	      description: this.state.product.name.tagline,
	      email: token.email
	    }) 
  }

  postToStripe() {
    axios.post('/charges', {
      card: this.state.token,
      amount: this.state.product.chargeAmount,
      description: this.state.product.name.tagline
    })  	
  }

	render() {
		return(
			<div className="product-content">
				<div className="product-header">
					<span className="tagline">{this.state.product.name.dvd + ' ' + this.state.product.name.tagline}</span>
					<span><em>{`$${this.state.product.amount}.00`}</em></span>
				</div>
				<div className="product-box">
		  		<ul>
					  {this.state.product.description.map((item) => {
					  	return (
				  			<li key={item}>
					  			<i className="fa fa-check fa-2x"></i>
					  			{item}
				  			</li>
				  		)
					  })}
	  			</ul>

					<div className="product-links">
					  <div className="product-button">
							< VideoModal product={this.state.product} />
						</div>
						<div className="product-button">
						<div className="checkout-button">	
			        <StripeCheckout
			          token={this.onToken}
			          stripeKey="pk_test_rpoW1XqBjFA2qFKKh2RgCPH1"
			          description={this.state.product.name.dvd}
			          panelLabel={`Pay $${this.state.product.amount + 15}.00`}
			          shippingAddress
			          billingAddress={true}
			          zipCode={true}
			        >			
			          <a className="payment-button">
			          	<p>Purchase</p>
							  </a>
							</StripeCheckout>
							</div>
						</div>
					</div>
				</div>

			</div>
		)
	}
}



export default ProductContainer;

// <i className="fa fa-cc-stripe fa-2x"></i>