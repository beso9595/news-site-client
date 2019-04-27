import React, {Component} from 'react';
import './Article.css';

const parseDate = x => {
	return x.getFullYear()
		+ '-' + (x.getMonth() - 1 < 10 ? '0' : '') + (x.getMonth() - 1)
		+ '-' + (x.getDate() - 1 < 10 ? '0' : '') + x.getDate()
		+ ' ' + (x.getHours() - 1 < 10 ? '0' : '') + x.getHours()
		+ '-' + (x.getMinutes() - 1 < 10 ? '0' : '') + x.getMinutes()
		+ '-' + (x.getSeconds() - 1 < 10 ? '0' : '') + x.getSeconds();
};

class Article extends Component {
	render() {
		const {title, content, date, url} = this.props;
		const parsedDate = date ? parseDate(date) : null;
		return (
			<div className="Article">
				<h1>{title}</h1>
				<div className="Article-Content">
					{content}
				</div>
				<div>
					<b>{parsedDate || ' - '}</b>
				</div>
				<a href={url}>More >></a>
			</div>
		);
	}
}

export default Article;