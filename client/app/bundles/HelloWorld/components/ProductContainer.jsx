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
			<div>
				{this.state.product.name}
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_rpoW1XqBjFA2qFKKh2RgCPH1"
        >			
				</StripeCheckout>
			</div>
		)
	}
}

export default ProductContainer;