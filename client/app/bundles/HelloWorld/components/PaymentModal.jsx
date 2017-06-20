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
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };        		
		
    return (
      <div className="modalbg" style={backdropStyle}>
        <div className="payment-modal">
          <button onClick={this.props.onClose}>
            <i className="fa fa-times fa-2x"></i>
          </button>
          <h3>Thanks for your payment!</h3>
          {this.props.children}
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