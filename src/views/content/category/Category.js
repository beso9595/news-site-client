import React, {Component} from 'react';
import './Category.css';
import {ListGroup, ListGroupItem} from 'reactstrap';
import Search from "../search/Search";

class Category extends Component {

	state = {
		data: []
	};

	async componentDidMount() {
		try {
			let response = await fetch('/category');
			if (response.status === 200) {
				let data = await response.json();
				this.setState({data});
			} else {
				throw new Error(`repose status: ${response.status}`);
			}
		} catch (ex) {
			alert('შეცდომა კატეგორიების ჩატვირთვისას');
			console.log(ex.message);
		}
	}

	render() {
		const {data} = this.state;
		return (
			<div className="Category">
				<Search/>
				<ListGroup>
					{
						(data || []).map((item, i) => {
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