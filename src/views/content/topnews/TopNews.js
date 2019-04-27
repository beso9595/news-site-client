import React, {Component} from 'react';
import './TopNews.css';
import {ListGroup, ListGroupItem} from 'reactstrap';

class TopNews extends Component {

	state = {
		data: []
	};

	async componentDidMount() {
		try {
			let response = await fetch('/article/top');
			if (response.status === 200) {
				let data = await response.json();
				this.setState({data});
			} else {
				throw new Error(`repose status: ${response.status}`);
			}
		} catch (ex) {
			alert('შეცდომა სტატიების ჩატვირთვისას');
			console.log(ex.message);
		}
	}

	render() {
		const {data} = this.state;
		return (
			<div className="TopNews">
				<ListGroup>
					{
						(data || []).map((article, i) => {
							return <ListGroupItem
								key={i}
								tag="a"
								href={"/article/" + article.id}
							>
								{article.title}
							</ListGroupItem>
						})
					}
				</ListGroup>
			</div>
		);
	}
}

export default TopNews;
