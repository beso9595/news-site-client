import React, {Component} from 'react';
import './Tag.css';

class Tag extends Component {
	render() {
		const {id, name} = this.props;
		return (
			<div className="Tag">
				<a href={'/article/tag/' + id}>{name}</a>
			</div>
		);
	}
}

export default Tag;