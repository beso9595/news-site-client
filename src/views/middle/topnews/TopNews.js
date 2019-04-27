import React, {Component} from 'react';
import './TopNews.css';
import {ListGroup, ListGroupItem} from 'reactstrap';

class TopNews extends Component {
	render() {
		const articles = this.state && this.state.articles ? this.state.articles : [];
		return (
			<div className="TopNews">
				<ListGroup>
					{
						articles.map((article, i) => {
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

	componentDidMount() {
		fetch('/article/top')
			.then(response => response.json())
			.then(data => {
				this.setState({articles: data})
			});
	}
}

export default TopNews;
