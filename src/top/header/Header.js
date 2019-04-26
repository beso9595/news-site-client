import React, {Component} from 'react';
import './Header.css';
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

class Header extends Component {
	render() {
		const menuItems = this.state && this.state.menuItems ? this.state.menuItems : [];
		return (
			<div className="Header">
				<Navbar light expand="md">
					<NavbarBrand href="/">News Site</NavbarBrand>
					<Collapse navbar>
						<Nav className="ml-auto" navbar>
							{
								menuItems.map((item, i) => {
									return <NavItem
										key={i}
									>
										<NavLink
											href={'/' + item.route}
										>
											{item.title}
										</NavLink>
									</NavItem>
								})
							}
						</Nav>
					</Collapse>
					<ButtonGroup>
						<Button outline color="primary" href="/login">Login</Button>
						<Button outline color="primary" href="/registration">Registration</Button>
					</ButtonGroup>
				</Navbar>
			</div>
		);
	}

	componentDidMount() {
		fetch('/menu')
			.then(response => response.json())
			.then(data => {
				this.setState({menuItems: data})
			}).catch(() => {
			debugger;
		});
	}
}

export default Header;