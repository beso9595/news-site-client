import React, {Component} from 'react';
import './Category.css';
import {ListGroup, ListGroupItem, Navbar, NavItem, Input, Button, Nav} from 'reactstrap';
import Util from "../../../utils/Util";

class Category extends Component {

	onSearchKeyPress(event) {
		if (event.key === 'Enter') {
			const str = document.getElementById('search').value;
			if (str) {
				window.location.href = window.location.origin + '/?search=' + str.trim();
			}
		}
	}

	onSearch() {
		const str = document.getElementById('search').value;
		if (str) {
			window.location.href = window.location.origin + '/?search=' + str.trim();
		}
	}

	componentDidMount() {
		const input = document.getElementById('search');
		input.addEventListener('keypress', this.onSearchKeyPress);
		let queryOb = Util.parseQuery(window.location.search);
		if (queryOb['search']) {
			input.value = queryOb['search'];
		}
		//
		fetch('/category')
			.then(response => response.json())
			.then(data => {
				this.setState({categoryItems: data})
			});
	}

	render() {
		const categoryItems = this.state && this.state.categoryItems ? this.state.categoryItems : [];
		return (
			<div className="Category">
				<Navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<Input type="text" name="search" id="search" bsSize="sm"/>
						</NavItem>
						<NavItem>
							<Button outline color="primary" size="sm" onClick={() => this.onSearch()}>Search</Button>
						</NavItem>
					</Nav>
				</Navbar>
				<ListGroup>
					{
						categoryItems.map((item, i) => {
							return <ListGroupItem
								key={i}
								tag="a"
								href={'/?cat=' + item.id}
							>
								{item.title}
							</ListGroupItem>;
						})
					}
				</ListGroup>
			</div>
		);
	}
}

export default Category;