import React, {Component} from 'react';
import './Tag.css';
import {Badge} from "reactstrap";

class Tag extends Component {
	render() {
		const {id, name} = this.props;
		return (
			<div className="Tag">
				<h5><Badge color="secondary"><a href={'/article/tag/' + id}>{name}</a></Badge></h5>
			</div>
		);
	}
}

export default Tag;
