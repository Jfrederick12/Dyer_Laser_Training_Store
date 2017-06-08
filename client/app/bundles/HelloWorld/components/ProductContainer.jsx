import PropTypes from 'prop-types';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import React, { Component } from 'react';
import VideoModal from './VideoModal';
import { Modal } from 'react-bootstrap';

class ProductContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product: this.props.product,
			token: '',
			showModal: false
		}
		this.onToken = this.onToken.bind(this)
		// this.open = this.open.bind(this)
		// this.close = this.close.bind(this)
	}

  onToken(token) {
    // console.log(token)
    // console.log(JSON.stringify(token))
    this.state.token = (token.id)
	    axios.post('/charges', {
	      card: this.state.token,
	      amount: this.state.product.amount,
	      description: this.state.product.description
	    }) 
    // console.log(this.state.token)
  }

  postToStripe() {
    axios.post('/charges', {
      card: this.state.token,
      amount: this.state.product.amount,
      description: this.state.product.description
    })  	
  }

  // close() {
  // 	this.setState({ showModal: false })
  // }	

  // open() {
  // 	this.setState({ showModal: true })
  // }

	render() {


		return(
			<div className="product-content">
				<h3>{this.state.product.name.dvd}</h3>
				<p><em>{this.state.product.name.tagline}</em></p>
				<p>{this.state.product.description}</p>
				<p><b>{`$${this.state.product.amount}.00`}</b></p>
				<div className="checkout-button">	
	        <StripeCheckout
	          token={this.onToken}
	          stripeKey="pk_test_rpoW1XqBjFA2qFKKh2RgCPH1"
	        >			
					</StripeCheckout>

				</div>

				< VideoModal product={this.state.product} />

			</div>
		)
	}
}


export default ProductContainer;