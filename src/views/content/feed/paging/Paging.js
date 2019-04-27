import React, {Component} from 'react';
import './Paging.css';
import {Button, ButtonGroup} from 'reactstrap';
import Util from "../../../../utils/Util";

class Paging extends Component {
	render() {
		const quantity = this.props.quantity || 1;
		let quantityArray = [];
		for (let i = 0; i < quantity; i++) {
			quantityArray.push(i + 1);
		}
		//
		let queryOb = Util.parseQuery(window.location.search);
		if (!queryOb.page) {
			queryOb.page = 1;
		}
		let buildQuery = n => {
			let url = '';
			Object.keys(queryOb).forEach((k, i) => {
				url += (i === 0 ? '?' : '&') + k + '=' + (k === 'page' ? n : queryOb[k]);
			});
			return url;
		};
		let isCurrent = n => {
			return parseInt(queryOb.page, 10) === n;
		};
		//
		return (
			<div className="Paging">
				<ButtonGroup>
					{
						quantityArray.map((n) => {
							return <Button
								key={n}
								color="primary"
								href={buildQuery(n)}
								disabled={isCurrent(n)}
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