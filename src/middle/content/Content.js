import React, {Component} from 'react';
import './Content.css';

import Category from '../category/Category';
import NewsFeed from "./newsfeed/NewsFeed";
import FullArticle from "./fullarticle/FullArticle";
import TopNews from '../topnews/TopNews';

class Content extends Component {
	render() {
		const {article, page, search, category} = this.props;
		return (
			<div className="App-intro">
				<Category/>
				{
					article ?
						<FullArticle articleId={article}/> :
						<NewsFeed
							page={page}
							search={search}
							category={category}
						/>
				}
				<TopNews/>
			</div>
		);
	}
}

export default Content;
