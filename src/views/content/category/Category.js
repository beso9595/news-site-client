import React, {Component} from 'react';
import './Category.css';
import {ListGroup, ListGroupItem} from 'reactstrap';
import Search from "../search/Search";

class Category extends Component {

	componentDidMount() {
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
				<Search/>
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