import React, {Component} from 'react';
import Scrollchor from 'react-scrollchor';

class Navigation extends Component {
	render() {
		return(
      <nav className="navigation">
        <Scrollchor to="#top" animate={{offset: -50, duration: 600}} className="nav-link"><i className="fa fa-heartbeat"></i></Scrollchor>
        <Scrollchor to="#videos" animate={{offset: -50, duration: 600}} className="nav-link">Videos</Scrollchor>
        <Scrollchor to="#benefits" animate={{offset: -50, duration: 600}} className="nav-link">Benefits</Scrollchor>
        <Scrollchor to="#about" animate={{offset: -50, duration: 600}} className="nav-link">About</Scrollchor>
        <Scrollchor to="#contact" animate={{offset: -50, duration: 600}} className="nav-link">Contact</Scrollchor>
      </nav>
	)
	}
}

export default Navigation;