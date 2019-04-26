import React, {Component} from 'react';
import './FullArticle.css';
import TagSpace from "./tagspace/TagSpace";

class FullArticle extends Component {

	state = {
		articleData: {}
	};

	componentDidMount() {
		debugger;
		const {articleId} = this.props;
		fetch('/article/' + articleId)
			.then(response => response.json())
			.then(articleData => {
				this.setState({articleData});
			});
	}

	render() {
		const {articleData} = this.state;
		const {articleId} = this.props;
		return (
			<div className="FullArticle">
				<div>
					<h1>{articleData.title || ''}</h1>
					<div>
						{articleData.description || ''}
					</div>
					<div>
						<TagSpace articleId={articleId}/>
					</div>
					<div>
						comments
					</div>
				</div>
			</div>
		);
	}
}

export default FullArticle;