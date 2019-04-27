import React, {Component} from 'react';
import './Feed.css';
import Paging from "./paging/Paging";
import Article from "./article/Article";

const textShortener = text => {
	let textArr = text.split(' ');
	return (textArr.length > 50 ? (textArr.slice(0, 50)) : textArr).join(' ') + '...';
};

class Feed extends Component {

	state = {
		articles: [],
		pages: 0
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
		}
	}

	render() {
		const {articles, pages} = this.state;
		return (
			<div className="NewsFeed">
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
			</div>
		);
	}
}

export default Feed;