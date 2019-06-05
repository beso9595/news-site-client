import React, {Component} from 'react';
import './TagSpace.css';
import Tag from "./tag/Tag";
import {Col, Container, Row} from "reactstrap";

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
		    <div className="TagSpace">
				<Container>
					<Row>
						<Col xs="auto"><b>Tags: </b></Col>
						{
							(data || []).map((tag) => {
								return <Col xs="auto" key={tag.name} style={{paddingLeft: 0, paddingRight: 0}}>
									<Tag id={tag.id} name={'#' + tag.name}/>
								</Col>;
							})
						}
					</Row>
				</Container>
			</div>
		);
	}
}

export default TagSpace;
