import React, {Component} from 'react';
import './FullArticle.css';
import TagSpace from "./tagspace/TagSpace";
import {Spinner} from "reactstrap";

class FullArticle extends Component {

	state = {
		data: {},
		isLoading: true
	};

	async componentDidMount() {
		const {id} = this.props;
		try {
			let response = await fetch('/article/' + id);
			if (response.status === 200) {
				let data = await response.json();
				this.setState({data});
			} else {
				throw new Error(`repose status: ${response.status}`);
			}
		} catch (ex) {
			alert('შეცდომა სტატიის ჩატვირთვისას');
			console.log(ex.message);
		} finally {
			this.setState({isLoading: false});
		}
	}

	render() {
		const {data, isLoading} = this.state;
		const {id} = this.props;
		return (
			<div className="FullArticle">
				{
					isLoading ?
						<Spinner color="primary"/>
						:
						<div>
							<h1>{data.title || ''}</h1>
							<div>
								{data.description || ''}
							</div>
							<div>
								<TagSpace articleId={id}/>
							</div>
							<div>
								{/*comments*/}
							</div>
						</div>
				}
			</div>
		);
	}
}

export default FullArticle;