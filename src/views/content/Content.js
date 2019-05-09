import React, {Component} from 'react';

import Category from './category/Category';
import Feed from "./feed/Feed";
import FullArticle from "./fullarticle/FullArticle";
import TopNews from './topnews/TopNews';
import {Col, Container, Row} from "reactstrap";

class Content extends Component {
	render() {
		const {article, page, search, category} = this.props;
		return (
			<div>
				<Container fluid>
					<Row>
						<Col lg={2}>
							<Category/>
						</Col>
						<Col lg={8}>
							{
								article ?
									<FullArticle id={article}/> :
									<Feed
										page={page}
										search={search}
										category={category}
									/>
							}
						</Col>
						<Col lg={2}>
							<TopNews/>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Content;
