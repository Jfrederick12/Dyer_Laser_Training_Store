import React, { Component } from 'react';

class DoctorBanner extends Component {
	render() {
		return(
			<div id="about" className="doctor-container">
				<div>
				</div>
				<div className="doctor-info">
					<h4><i className="fa fa-user-md fa-2x"></i> About Dr. Dyer</h4>
					<p>Bret Dyer DDS, MS is an award-winning, highly acclaimed dentist and leader in the field of periodontics. Dr. Dyer opened his private practice in 1991 after receiving his DDS degree from Baylor College of Dentistry, and earning a Master of Science in Periodontics at the University of Texas Dental School in Houston.</p>
					<p>A few of his accomplishments include a Mastership certification from the WCLI and serving as the chief investigator for Biolase in obtaining FDA clearance for periodontal treatment with the Er:Cr:YSGG laser. Dr. Dyer has committed a large portion of his career to lasers for its surgical and regenerative benefits.</p>
					<p>Dr. Dyer’s extensive and innovative experience with lasers has resulted in trusted mentorship and teaching opportunities, travelling globally to share his methods.</p>
				</div>
			</div>
		)
	}
}

export default DoctorBanner;