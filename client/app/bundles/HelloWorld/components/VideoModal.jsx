import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

class VideoModal extends Component {
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
		const product = this.props.product
		return(
			<div>
				<button onClick={this.open}>demo</button>
				<Modal show={this.state.showModal} onHide={this.close}>
				  <Modal.Header closeButton>
            <Modal.Title>{product.name.dvd}</Modal.Title>
          </Modal.Header>
	        <Modal.Body>         
						<iframe width="560" height="315" src={product.video} allowFullScreen></iframe>
	        </Modal.Body>
				</Modal>
			</div>
		)
	}
}

export default VideoModal;