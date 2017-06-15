import React, {Component} from 'react';

class Navigation extends Component {
	render() {
		return(
			<nav className="navigation">
				<a href="#videos">Videos</a>
				<a href="#benefits">Benefits</a>
				<a href="#about">About</a>
				<a href="#contact">Contact</a>
			</nav>
		)
	}
}

export default Navigation;