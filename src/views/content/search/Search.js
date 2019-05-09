import React, {Component} from 'react';
import {Input, Button} from 'reactstrap';
import Util from "../../../utils/Util";
import './Search.css';

class Search extends Component {

	state = {
		value: null
	};

	componentDidMount() {
		let queryOb = Util.parseQuery(window.location.search);
		if (queryOb['search']) {
			this.setState({value: queryOb['search']});
		}
	}

	onChange = (e) => {
		this.setState({value: e.target.value});
	};

	onKeyDown = (e) => {
		if (e.key === 'Enter') {
			const {value} = this.state;
			if (value) {
				window.location.href = window.location.origin + '/?search=' + value;
			}
		}
	};

	onSearch = () => {
		const {value} = this.state;
		if (value) {
			window.location.href = window.location.origin + '/?search=' + value;
		}
	};

	render() {
		const {value} = this.state;
		return (
			<div className="Search">
				<Input
					type="text"
					name="search"
					bsSize="sm"
					onChange={this.onChange}
					onKeyDown={this.onKeyDown}
					value={value || ''}
					className="Search-Input"
				/>
				<Button color="primary" size="sm" onClick={this.onSearch} className="Search-Button" outline>
					Search
				</Button>
			</div>
		);
	}
}

export default Search;