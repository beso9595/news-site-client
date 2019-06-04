import React, {Component} from 'react';
import './TagSpace.css';
import Tag from "./tag/Tag";

class TagSpace extends Component {

	state = {
		data: []
	};

	async componentDidMount() {
		const {articleId} = this.props;
		try {
			let response = await fetch('/tag/' + articleId);
			if (response.status === 200) {
				let data = await response.json();
				this.setState({data});
			} else {
				throw new Error(`repose status: ${response.status}`);
			}
		} catch (ex) {
			alert('შეცდომა ტეგების ჩატვირთვისას');
			console.log(ex.message);
		}
	}

	render() {
		const {data} = this.state;
		return (
			<div className="Tag">
				<b>Tags: </b>
				{
					(data || []).map((tag) => {
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
}

export default TagSpace;