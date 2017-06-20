import PropTypes from 'prop-types';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import React, { Component } from 'react';
import VideoModal from './VideoModal';
import PaymentModal from './PaymentModal';

class ProductContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product: this.props.product,
			token: '',
			isOpen: false,
			paymentModalOpen: false
		}
		this.onToken = this.onToken.bind(this)
	}

  onToken(token) {
    this.state.token = (token.id)
	    axios.post('/charges', {
	      card: this.state.token,
	      amount: this.state.product.chargeAmount,
	      description: this.state.product.name.tagline,
	      email: token.email
	    }) 
	    .then((response) => {
	    	this.setState({ paymentModalOpen: !this.state.paymentModalOpen})
    })
  }

  postToStripe() {
    axios.post('/charges', {
      card: this.state.token,
      amount: this.state.product.chargeAmount,
      description: this.state.product.name.tagline
    })  
  }

  toggleModal() {
  	this.setState({ isOpen: !this.state.isOpen})
  }

  togglePaymentModal() {
  	this.setState({ paymentModalOpen: !this.state.paymentModalOpen})
  }  

	render() {
		let videoLink = ''

		if (this.state.product.video !== '') {
			videoLink = (
				<a className="video-button" onClick={this.toggleModal.bind(this)}>
				  <i className='fa fa-youtube-play fa-2x'></i>
				  <p>Play Demo</p>
			  </a>	
			)
		}

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

						<PaymentModal product={this.state.product} show={this.state.paymentModalOpen}
							onClose={this.togglePaymentModal.bind(this)}
						/>

						{videoLink}

						<VideoModal product={this.state.product} show={this.state.isOpen} 
							onClose={this.toggleModal.bind(this)} 
						/>

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
				          <i className="fa fa-cc-stripe fa-2x"></i>
			          	<p>Purchase</p>
							  </a>
							</StripeCheckout>
						</div>
					</div>
				</div>

			</div>
		)
	}
}



export default ProductContainer;