import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YoutubePlayer from 'react-youtube-player';

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
    if(!this.props.show) {
      return null;
    }

    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    const modalStyle = {
      backgroundColor: 'transparent',
      borderRadius: 5,
      top: '15%',
      maxWidth: '80%',
      minHeight: 300,
      maxHeight: 500,
      margin: '0 auto',
      padding: 30
    };        		
		
    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
      	<div className="header">
	        <button onClick={this.props.onClose}>
	          <i className="fa fa-times fa-2x"></i>
	        </button>
        </div>
          {this.props.children}
          <YoutubePlayer
					    videoId={this.props.product.video}
					    playbackState='unstarted'
					    configuration={
					        {
					        	controls: 0
					        }
					    }
					/>
        </div>
      </div>
    );    		
	}
}

VideoModal.propTypes = {
  onClose: React.PropTypes.func.isRequired,
  show: React.PropTypes.bool,
  children: React.PropTypes.node
};

export default VideoModal;

			// <div className="video-modal">
			// 	<a onClick={this.open}>
			// 	  <i className="fa fa-youtube-play fa-2x"></i>
			// 		<p>Play Demo</p>
			// 	</a>
			// 	<Modal show={this.state.showModal} onHide={this.close}>
			// 	  <Modal.Header closeButton>
   //          <Modal.Title>{product.name.dvd}</Modal.Title>
   //        </Modal.Header>
	  //       <Modal.Body>         
			// 			<iframe width="560" height="315" src={product.video} allowFullScreen></iframe>
	  //       </Modal.Body>
			// 	</Modal>
			// </div>