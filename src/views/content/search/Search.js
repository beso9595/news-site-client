import React, {Component} from 'react';
import {Navbar, NavItem, Input, Button, Nav} from 'reactstrap';
import Util from "../../../utils/Util";
import './Search.css';

class Category extends Component {

	state = {
		value: null
	};

	componentDidMount() {
		let queryOb = Util.parseQuery(window.location.search);
		if (queryOb['search']) {
			this.setState({value: queryOb['search']});
		}
	}

	onChange = (e) => {
		this.setState({value: e.target.value});
	};

	onKeyDown = (e) => {
		if (e.key === 'Enter') {
			const {value} = this.state;
			if (value) {
				window.location.href = window.location.origin + '/?search=' + value;
			}
		}
	};

	onSearch = () => {
		const {value} = this.state;
		if (value) {
			window.location.href = window.location.origin + '/?search=' + value;
		}
	};

	render() {
		const {value} = this.state;
		return (
			<div className="Category">
				<Navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<Input
								type="text"
								name="search"
								bsSize="sm"
								onChange={this.onChange}
								onKeyDown={this.onKeyDown}
								value={value || ''}
							/>
						</NavItem>
						<NavItem>
							<Button
								color="primary"
								size="sm"
								onClick={this.onSearch}
								outline
							>
								Search
							</Button>
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		);
	}
}

export default Category;