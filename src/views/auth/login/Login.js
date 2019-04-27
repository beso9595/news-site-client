import React, {Component} from 'react';
import './Login.css';
import {Form, Input, FormGroup, Button, ListGroup, ListGroupItem, Alert} from 'reactstrap';

class Login extends Component {

	constructor(props) {
		super(props);

		this.state = {
			visible: false,
			message: []
		};
	}

	onLogin() {
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;

		const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		const message = [];
		if (email && password) {
			if (!regex.test(email)) {
				message.push('Wrong email format');
			}
		} else {
			message.push('Fill all the fields');
		}
		const isValid = message.length === 0;
		this.setState({
			visible: !isValid,
			message: message
		});
		//
		if (isValid) {
			//login request
		}
	}

	render() {
		return (
			<div className="Login">
				<Form>
					<FormGroup>
						<Input type="email" name="email" id="email" placeholder="Email"/>
						<Input type="password" name="password" id="password" placeholder="Password"/>
					</FormGroup>
					<a href="/restore">Forgot Password?</a>
					<Button color="primary" onClick={() => this.onLogin()}>Log In</Button>
				</Form>
				<Alert color="info" isOpen={this.state.visible}>
					<ListGroup>
						{
							this.state.message.map((item, i) => {
								return <ListGroupItem key={i} color="info">
									{item}
								</ListGroupItem>;
							})
						}
					</ListGroup>
				</Alert>
			</div>
		);
	}
}

export default Login;