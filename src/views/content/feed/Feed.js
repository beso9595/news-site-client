import React, {Component} from 'react';
import './Feed.css';
import Paging from "./paging/Paging";
import Article from "./article/Article";

const textShortener = text => {
	let textArr = text.split(' ');
	return (textArr.length > 50 ? (textArr.slice(0, 50)) : textArr).join(' ') + '...';
};

class Feed extends Component {

	componentDidMount() {
		const {search, category, page} = this.props;
		let url = '/article?page=' + (page || '') +
			(search ? '&search=' + search : '') +
			(category ? '&category=' + category : '');
		fetch(url)
			.then(response => response.json())
			.then(data => {
				this.setState(data);
			});
	}

	render() {
		const articles = this.state && this.state.articles ? this.state.articles : [];
		const pages = this.state && this.state.pages ? this.state.pages : 0;
		return (
			<div className="NewsFeed">
				<div className="NewsFeed-Articles">
					{
						articles.map((article, i) => {
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