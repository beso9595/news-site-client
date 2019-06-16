import React, {Component} from 'react';
import './Login.css';
import {Form, Input, FormGroup, Button, Alert} from 'reactstrap';

class Login extends Component {

	state = {
		email: null,
		password: null,
		visible: false,
		message: []
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onLogin = async () => {
		const {email, password} = this.state;

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
			try {
				let response = await fetch('/user/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({email, password})
				});
				if (response.status === 200) {
					let token = await response.text();
					if (token) {
						localStorage.setItem('token', token);
						document.location.href = "/";
					}
				} else {
					throw new Error(`repose status: ${response.status}`);
				}
			} catch (ex) {
				alert('დაფიქსირდა შეცდომა');
				console.log(ex.message);
			}
		}
	};

	render() {
		const {email, password, visible, message} = this.state;
		return (
			<div className="Login">
				<Form className="Login-Form">
					<FormGroup>
						<Input
							type="email"
							name="email"
							placeholder="Email"
							onChange={this.handleChange}
							value={email || ''}
						/>
						<Input
							type="password"
							name="password"
							placeholder="Password"
							onChange={this.handleChange}
							value={password || ''}
						/>
					</FormGroup>
					<a href="/restore">Forgot Password?</a>
					<Button
						color="primary"
						onClick={this.onLogin}
					>
						Log In
					</Button>
				</Form>
				{
					message.map((item, i) => (
						<Alert key={i} color="warning" isOpen={visible}>
							{item}
						</Alert>
					))
				}
			</div>
		);
	}
}

export default Login;