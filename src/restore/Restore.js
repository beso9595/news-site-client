import React, {Component} from 'react';
import './Restore.css';
import {Form, Input, FormGroup, Button, ListGroup, ListGroupItem, Alert} from 'reactstrap';

class Restore extends Component {

	constructor(props) {
		super(props);

		this.state = {
			visible: false,
			message: []
		};
	}

	onRestore() {
		const email = document.getElementById('email').value;

		const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		const message = [];
		if (email) {
			if (!regex.test(email)) {
				message.push('Wrong email format');
			}
		} else {
			message.push('Fill the field');
		}
		const isValid = message.length === 0;
		this.setState({
			visible: !isValid,
			message: message
		});
		//
		if (isValid) {
			//reset request
		}
	}

	render() {
		return (
			<div className="Restore">
				<Form>
					<FormGroup>
						<Input type="email" name="email" id="email" placeholder="Email"/>
					</FormGroup>
					<Button color="primary" onClick={() => this.onRestore()}>Restore</Button>
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

export default Restore;