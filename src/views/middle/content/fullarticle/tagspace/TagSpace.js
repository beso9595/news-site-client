import React, {Component} from 'react';
import './TagSpace.css';

import Tag from "./tag/Tag";

class TagSpace extends Component {
	render() {
		const tags = this.state && this.state.tags ? this.state.tags : [];
		return (
			<div className="Tag">
				<b>Tags: </b>
				{
					tags.map((tag) => {
						return <Tag
							id={tag.id}
							key={tag.id}
							name={'#' + tag.name}
						/>;
					})
				}
			</div>
		);
	}

	componentDidMount() {
		fetch('/tag/' + this.props.articleId)
			.then(response => response.json())
			.then(data => {
				this.setState({tags: data})
			});
	}
}

export default TagSpace;