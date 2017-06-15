import React, { Component } from 'react';

class Contact extends Component {
	render() {
		return(
			<div className="contact-container">
			  <div>
			  	<section>
				  	<h2>Contact Info</h2>
				  	<p><i className="fa fa-map-marker"></i>Ste 800, 4645 Sweetwater Boulevard, Sugar Land, TX 77479</p>
				  	<p><i className="fa fa-phone"></i>(281) 980-2344</p>
				  	<p><i className="fa fa-envelope"></i>Drdyer@dentallasertrainingvideos.com</p>
				  	<p><i className="fa fa-copyright"></i>2017 Dental Laser Training Videos</p>
			  	</section>
			  </div>
			  <div>
			  	<section className="social-icon">
			  		<h2>More About Us</h2>
						<nav>
							<a href='https://www.facebook.com/drbretdyer/' className="social-icon"><i className="fa fa-facebook fa-2x"></i></a>
							<a href='https://plus.google.com/108946516314350079354' className="social-icon"><i className="fa fa-google-plus fa-2x"></i></a>
							<a href='https://www.yelp.com/biz/bret-l-dyer-dds-ms-sugar-land' className="social-icon"><i className="fa fa-yelp fa-2x"></i></a>
						</nav>
						<nav className="site-link">
							<a href='https://http://www.drbretdyer.com/'>www.drbretdyer.com</a>
						</nav>
					</section>
			  </div>
			</div>
		)
	}
}

export default Contact;

// <i className="fa fa-comment-o fa-4x"></i>