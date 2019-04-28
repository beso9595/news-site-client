import React, {Component} from 'react';
import './Registration.css';
import {Form, Input, FormGroup, Button, Alert, ListGroup, ListGroupItem} from 'reactstrap';

class Registration extends Component {

	state = {
		credentials: {
			email: null,
			firstName: null,
			lastName: null,
			password: null,
			passwordConfirm: null
		},
		visible: false,
		success: false,
		message: []
	};

	handleChange = e => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value
			}
		});
	};

	onRegistration = async () => {
		const {email, firstName, lastName, password, passwordConfirm} = this.state.credentials;

		const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		const message = [];
		if (email && firstName && lastName && password && passwordConfirm) {
			if (!regex.test(email)) {
				message.push('Wrong email format');
			}
			if (password !== passwordConfirm) {
				message.push('Passwords doesn\'t match');
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
			let response;
			try {
				response = await fetch('/user', {
					method: 'post',
					headers: {
						"Content-Type": "application/json; charset=utf-8"
					},
					body: JSON.stringify({email, firstName, lastName, password})
				});
				let data = await response.json();
				this.setState({
					credentials: {
						...this.state.credentials,
						email: data.email
					},
					visible: true,
					success: true,
					message: [`Registered Successfully! Now you can check your email (${data.email}) for validating account.`]
				});
			} catch (ex) {
				if (response && response.status) {
					let message = 'Unknown error';
					// eslint-disable-next-line default-case
					switch (response.status) {
						case 409:
							message = 'User with this email already exists';
							break;
						case 500:
							message = 'Internal error';
							break;
					}
					this.setState({
						visible: true,
						success: false,
						message: [message]
					});
				}
				console.log(ex.message);
			}
		}
	};

	render() {
		const {visible, message, success} = this.state;
		const {email, firstName, lastName, password, passwordConfirm} = this.state.credentials;
		return (
			<div className="Registration">
				<Form id="registration">
					<FormGroup>
						<Input
							type="mail"
							name="email"
							placeholder="E-mail"
							onChange={this.handleChange}
							value={email || ''}
						/>
						<Input
							type="text"
							name="firstName"
							placeholder="First Name"
							onChange={this.handleChange}
							value={firstName || ''}
						/>
						<Input
							type="text"
							name="lastName"
							placeholder="Last Name"
							onChange={this.handleChange}
							value={lastName || ''}
						/>
						<Input
							type="password"
							name="password"
							placeholder="Password"
							onChange={this.handleChange}
							value={password || ''}
						/>
						<Input
							type="password"
							name="passwordConfirm"
							placeholder="Password Confirm"
							onChange={this.handleChange}
							value={passwordConfirm || ''}
						/>
					</FormGroup>
					<Button color="primary" onClick={this.onRegistration}>Registration</Button>
				</Form>
				<Alert color={success ? "success" : "danger"} isOpen={visible}>
					<ListGroup>
						{
							(message || []).map((item, i) => (
								<ListGroupItem key={i} color={success ? "success" : "danger"}>
									{item}
								</ListGroupItem>
							))
						}
					</ListGroup>
				</Alert>
			</div>
		);
	}
}

export default Registration;