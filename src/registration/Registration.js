import React, {Component} from 'react';
import './Registration.css';
import {Form, Input, FormGroup, Button, Alert, ListGroup, ListGroupItem} from 'reactstrap';

class Registration extends Component {

	constructor(props) {
		super(props);

		this.state = {
			visible: false,
			message: []
		};
	}

	onRegistration() {
		const email = document.getElementById('email').value;
		const firstname = document.getElementById('firstname').value;
		const lastname = document.getElementById('lastname').value;
		const password = document.getElementById('password').value;
		const passwordRepeat = document.getElementById('password-repeat').value;

		const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		const message = [];
		if (email && firstname && lastname && password && passwordRepeat) {
			if (!regex.test(email)) {
				message.push('Wrong email format');
			}
			if (password !== passwordRepeat) {
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
		const me = this;
		//
		if (isValid) {
			fetch('/user/add', {
				method: 'post',
				headers: {
					"Content-Type": "application/json; charset=utf-8"
				},
				body: JSON.stringify({
					email,
					firstname,
					lastname,
					password
				})
			}).then(function (response) {
				return response.json();
			}).then(function (data) {
				if (data.exists) {
					me.setState({
						visible: true,
						message: ['User with <b>' + data.email + '</b> already exists']
					});
				} else {
					const el = document.getElementById('finish');
					me.setState({
						email: data.email,
						hideForm: true
					});
					document.getElementById('registration').hidden = true;
					el.hidden = null;
				}
			});
		}
	}

	render() {
		return (
			<div className="Registration">
				<Form id="registration">
					<FormGroup>
						<Input type="mail" name="email" id="email" placeholder="Email"/>
						<Input type="text" name="firstname" id="firstname" placeholder="Firstname"/>
						<Input type="text" name="lastname" id="lastname" placeholder="Lastname"/>
						<Input type="password" name="password" id="password" placeholder="Password"/>
						<Input type="password" name="password-repeat" id="password-repeat" placeholder="Repeat"/>
					</FormGroup>
					<Button color="primary" onClick={() => this.onRegistration()}>Registration</Button>
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
				<div id="finish" hidden>
					Registered Successfully! Now you can check your email (<b>{this.state.email}</b>) for validating
					account.
				</div>
			</div>
		);
	}
}

export default Registration;