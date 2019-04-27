import React, {Component} from 'react';
import './Content.css';

import Menu from '../category/Category';
import Feed from "./feed/Feed";
import FullArticle from "./fullarticle/FullArticle";
import TopNews from '../topnews/TopNews';

class Content extends Component {
	render() {
		const {article, page, search, category} = this.props;
		return (
			<div className="App-intro">
				<Menu/>
				{
					article ?
						<FullArticle articleId={article}/> :
						<Feed
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
