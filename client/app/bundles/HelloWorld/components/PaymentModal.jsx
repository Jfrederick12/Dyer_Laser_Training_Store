import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaymentModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		}
		this.open = this.open.bind(this)
		this.close = this.close.bind(this)
	}

  close() {
  	this.setState({ showModal: false })
  }	

  open() {
  	this.setState({ showModal: true })
  }


	render() {
    if(!this.props.show) {
      return null;
    }

    const backdropStyle = {
      // position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.2)',
      padding: 50
    };

    const modalStyle = {
      backgroundColor: 'white',
      borderRadius: 5,
      top: 200,
      marginTop: '20%',
      margin: '0 auto',
    };        		
		
    return (
      <div className="modalbg" style={backdropStyle}>
        <div className="payment-modal">
          <h3>Payment Details</h3>
          <h4>{`Name: ${this.props.product.name.tagline}`}</h4>
          <h4>{`Item Cost: $${this.props.product.amount}.00`}</h4>
          <h4>Shipping: $15.00</h4>
          <h4>{`Total: $${this.props.product.amount + 15}.00`}</h4>
          <h4>Thanks for your payment!</h4>
          <p>You will see a Stripe receipt sent to your email regarding this transaction. Please allow up to 8-10 business days for the package to arrive. If you have any questions or concerns feel free to reach out to Drdyer@dentallasertrainingvideos.com</p>
          {this.props.children}
          <h4 onClick={this.props.onClose}><i className="fa fa-times"></i>Close</h4>
        </div>
      </div>
    );    		
	}
}

PaymentModal.propTypes = {
  onClose: React.PropTypes.func.isRequired,
  show: React.PropTypes.bool,
  children: React.PropTypes.node
};

export default PaymentModal;