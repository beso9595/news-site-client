import React, {Component} from 'react';
import './Paging.css';
import {Button, ButtonGroup} from 'reactstrap';
import Util from "../../../../utils/Util";

const buildQuery = (queryOb, page) => Util.buildQuery({...queryOb, page});

class Paging extends Component {

	render() {
		let {quantity} = this.props;
		let quantityArray = [];
		if (quantity && quantity > 1) {
			for (let i = 0; i < quantity; i++) {
				quantityArray.push(i + 1);
			}
		}
		//
		let queryOb = Util.parseQuery(window.location.search);
		if (!queryOb.page) {
			queryOb.page = 1;
		}
		//
		return (
			<div className="Paging">
				<ButtonGroup>
					{
						quantityArray.map((n) => {
							return <Button
								key={n}
								color="primary"
								href={buildQuery(queryOb, n)}
								disabled={parseInt(queryOb.page) === n}
							>
								{n}
							</Button>
						})
					}
				</ButtonGroup>
			</div>
		);
	}
}

export default Paging;