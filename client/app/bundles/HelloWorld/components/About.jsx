import React, { Component } from 'react';
import DoctorBanner from './DoctorBanner';

class About extends Component {
	render() {
		return(
			<div id="benefits">
				<div className="about-container">
					<div>
						<h4>The Benefits of Laser Dentistry</h4>
						<p><i className="fa fa-quote-left fa-2x"></i>Laser dentistry is minimally invasive, takes half the time of traditional scalpel surgery, and increases the rate of post op healing. Given that patients report experiencing little to no discomfort during or after surgery, laser dentistry is being sought out more now than ever, and quickly becoming an industry standard.</p>
					</div>
					<div>
						<h4>Versatility of Diode Lasers </h4>
						<p><i className="fa fa-quote-left fa-2x"></i>Dr. Dyer covers a variety of implementations for your diode laser, from improving chronic TMJ pain to deep pocket therapy to cosmetic surgery. By learning the procedures that allow you to take full advantage of laser dentistry, you’ll be given the tools to propel, and possibly even expand, your practice.</p>
					</div>
					<div>
						<h4>Lasers and Gum Disease</h4>
						<p><i className="fa fa-quote-left fa-2x"></i>Laser dentistry is the most effective tool for combatting and preventing gum disease to date, with the ability to clean and promote healing in a way that no other method provides. Along with regular professional dental cleanings, a laser can be used in the hygiene setting to prevent further progression of the disease.</p>
					</div>				
				</div>
				< DoctorBanner />
			</div>
		)
	}
}

export default About;