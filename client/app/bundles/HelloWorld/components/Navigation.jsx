import React, {Component} from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';

class Navigation extends Component {
	render() {
		return(
		  <Navbar fixedTop fluid className="navbar">
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a href="#">Dental Training Videos</a>
		      </Navbar.Brand>
		    </Navbar.Header>
		    <Nav>
		      <NavItem eventKey={1} href="#">Videos</NavItem>
		      <NavItem eventKey={2} href="#">About</NavItem>
		    </Nav>
		  </Navbar>
		)
	}
}

export default Navigation;