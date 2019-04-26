import React, {Component} from 'react';
import './Article.css';

class Article extends Component {
	render() {
		let d = this.props.date;
		let format = x => {
			return x.getFullYear()
				+ '-' + (x.getMonth() - 1 < 10 ? '0' : '') + (x.getMonth() - 1)
				+ '-' + (x.getDate() - 1 < 10 ? '0' : '') + x.getDate()
				+ ' ' + (x.getHours() - 1 < 10 ? '0' : '') + x.getHours()
				+ '-' + (x.getMinutes() - 1 < 10 ? '0' : '') + x.getMinutes()
				+ '-' + (x.getSeconds() - 1 < 10 ? '0' : '') + x.getSeconds();
		};
		const date = d ? format(d) : null;
		const {title, content} = this.props;
		return (
			<div className="Article">
				<h1>{title}</h1>
				<div className="Article-Content">
					{content}
				</div>
				<div>
					<b>{date || ' - '}</b>
				</div>
				<a href={this.props.url}>More >></a>
			</div>
		);
	}
}

export default Article;