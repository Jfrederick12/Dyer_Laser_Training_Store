import React, { Component } from 'react';
import DoctorBanner from './DoctorBanner';

class About extends Component {
	render() {
		return(
			<div id="benefits">
				<div className="about-container">
					<div>
						<h4>The Benefits of Laser Dentistry</h4>
						<p><i className="fa fa-quote-left fa-2x"></i>Incorporating laser dentistry into your practice guarantees some major benefits for both your office and your patients. The minimally invasive qualities and other attractive aspects will put your patients at ease and will boost your reputation, while adding to the efficiency of your office. Read on to learn the five key benefits of learning and offering laser dentistry.
						</p>
					</div>
					<div>
						<h4>Are Dental Lasers Reliable?</h4>
						<p><i className="fa fa-quote-left fa-2x"></i>Because laser dentistry has only recently become more of a well-established practice, many wonder if lasers garner the same level of results as conventional methods. While using a laser isn’t necessarily always “better” in terms of long-term results, the immediate benefits outweigh many aspects of conventional surgery. The instant outcomes make it all worth the while.
						</p>
					</div>
					<div>
						<h4>Can Lasers Prevent Gum Disease?</h4>
						<p><i className="fa fa-quote-left fa-2x"></i>Laser dentistry is the most effective tool for combatting and preventing gum disease to date. Lasers have the ability to clean and promote healing in a way that no other method provides. If you’re looking for better solutions for your patients who struggle with gum disease, you’ll want to read more to find out just how laser dentistry can change the course of their oral health.
						</p>
					</div>				
				</div>
				< DoctorBanner />
			</div>
		)
	}
}

export default About;