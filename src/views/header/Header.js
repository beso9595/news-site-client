import React, {Component} from 'react';
import {
	Collapse,
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	ButtonGroup,
	Button
} from 'reactstrap';
import './Header.css';

class Header extends Component {

	onLogout = () => {
		localStorage.clear();
		window.location.reload();
	};

	render() {
		let isAuthenticated = !!localStorage.getItem('tokenObject');
		return (
			<div className="Header">
				<Navbar light expand="md">
					<NavbarBrand href="/">News Site</NavbarBrand>
					<Collapse navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href={'/'}>
									მთავარი
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href={'/about'}>
									კონტაქტი
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href={'/contact'}>
									შესახებ
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
					{
						isAuthenticated ?
							<ButtonGroup>
								<Button outline color="primary" href="/profile">Profile</Button>
								<Button outline color="primary" href="#" onClick={this.onLogout}>Logout</Button>
							</ButtonGroup>
							:
							<ButtonGroup>
								<Button outline color="primary" href="/login">Login</Button>
								<Button outline color="primary" href="/registration">Registration</Button>
							</ButtonGroup>
					}
				</Navbar>
			</div>
		);
	}
}

export default Header;