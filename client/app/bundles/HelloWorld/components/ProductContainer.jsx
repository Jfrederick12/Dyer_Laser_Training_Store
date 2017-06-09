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

	render() {


		return(
			<div className="product-content">
				<div className="product-header">
					<p className="tagline">{this.state.product.name.tagline}</p>
				</div>
				<div className="product-box">
		  		<ul>
					  {this.state.product.description.map((item) => {
					  	return (
				  			<li>
					  			<i className="fa fa-check fa-2x"></i>
					  			{item}
				  			</li>
				  		)
					  })}
		  			<li>
			  			<i className="fa fa-money fa-2x"></i>
			  			{`$${this.state.product.amount}.00`}
		  			</li>
	  			</ul>

					<div className="product-links">
						< VideoModal product={this.state.product} />

						<div className="checkout-button">	
			        <StripeCheckout
			          token={this.onToken}
			          stripeKey="pk_test_rpoW1XqBjFA2qFKKh2RgCPH1"
			        >			
			          <a className="payment-button">
				          <i className="fa fa-credit-card fa-2x"></i>
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
			// <div className="product-content">
			// 	<div className="product-header">
			// 		<p className="tagline">{this.state.product.name.tagline}</p>
			// 	</div>
			// 	<div className="product-box">
		 //  		<ul>
			// 		  {this.state.product.description.map((item) => {
			// 		  	return (
			// 	  			<li>
			// 		  			<i className="fa fa-check fa-2x"></i>
			// 		  			{item}
			// 	  			</li>
			// 	  		)
			// 		  })}
		 //  			<li>
			//   			<i className="fa fa-money fa-2x"></i>
			//   			{`$${this.state.product.amount}.00`}
		 //  			</li>
	  // 			</ul>

			// 		<div className="product-links">
			// 			< VideoModal product={this.state.product} />

			// 			<div className="checkout-button">	
			//         <StripeCheckout
			//           token={this.onToken}
			//           stripeKey="pk_test_rpoW1XqBjFA2qFKKh2RgCPH1"
			//         >			
			//           <a className="payment-button">
			// 	          <i className="fa fa-credit-card fa-2x"></i>
			//           	<p>Purchase</p>
			// 				  </a>
			// 				</StripeCheckout>
			// 			</div>
			// 		</div>
			// 	</div>

			// </div>