import PropTypes from 'prop-types';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import React, {Component} from 'react';

class ProductContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product: this.props.product,
			token: ''
		}
		this.onToken = this.onToken.bind(this)
  	console.log(this.props.product.amount)
	}

  onToken(token) {
    console.log(token)
    console.log(JSON.stringify(token))
    this.state.token = (token.id)
	    axios.post('/charges', {
	      card: this.state.token,
	      amount: this.state.product.amount,
	      description: this.state.product.description
	    }) 
    console.log(this.state.token)
  }

  postToStripe() {
    axios.post('/charges', {
      card: this.state.token,
      amount: this.state.product.amount,
      description: this.state.product.description
    })  	
  }  	

	render() {


		return(
			<div className="product-content">
				<h3>{this.state.product.name.dvd}</h3>
				<p><em>{this.state.product.name.tagline}</em></p>
				<p>{this.state.product.description}</p>
				<div className="checkout-button">	
	        <StripeCheckout
	          token={this.onToken}
	          stripeKey="pk_test_rpoW1XqBjFA2qFKKh2RgCPH1"
	        >			
					</StripeCheckout>
				</div>
			</div>
		)
	}
}

// <iframe width="560" height="315" src={this.state.product.video} allowFullScreen></iframe>

export default ProductContainer;