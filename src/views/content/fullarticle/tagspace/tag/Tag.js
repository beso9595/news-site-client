import React, {Component} from 'react';
import './Tag.css';

class Tag extends Component {
	render() {
		return (
			<div className="Tag">
				<a href={'/article/tag/' + this.props.id}>{this.props.name}</a>
			</div>
		);
	}
}

export default Tag;