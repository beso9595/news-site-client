import React, {Component, Fragment} from 'react';
import './Feed.css';
import Paging from "./paging/Paging";
import Article from "./article/Article";
import {Spinner} from "reactstrap";

const textShortener = text => {
	let textArr = text.split(' ');
	return (textArr.length > 50 ? (textArr.slice(0, 50)) : textArr).join(' ') + '...';
};

class Feed extends Component {

	state = {
		articles: [],
		pages: 0,
		isLoading: true
	};

	async componentDidMount() {
		const {search, category, page} = this.props;
		let url = '/article?page=' + (page || '') +
			(search ? '&search=' + search : '') +
			(category ? '&category=' + category : '');
		try {
			let response = await fetch(url);
			if (response.status === 200) {
				let responseObject = await response.json();
				this.setState(responseObject);
			} else {
				throw new Error(`repose status: ${response.status}`);
			}
		} catch (ex) {
			alert('შეცდომა სტატიების ჩატვირთვისას');
			console.log(ex.message);
		} finally {
			this.setState({isLoading: false});
		}
	}

	render() {
		const {articles, pages, isLoading} = this.state;
		return (
			<div className="NewsFeed">
				{
					isLoading ?
						<Spinner color="primary"/>
						:
						<Fragment>
							<div className="NewsFeed-Articles">
								{
									(articles || []).map((article, i) => {
										return <Article
											key={article.id + i}
											title={article.title}
											content={textShortener(article.description)}
											date={article.createDate ? new Date(article.createDate) : null}
											url={"/article/" + article.id}
										/>;
									})
								}
							</div>
							<div className="NewsFeed-Paging">
								<Paging
									quantity={pages}
								/>
							</div>
						</Fragment>
				}
			</div>
		);
	}
}

export default Feed;