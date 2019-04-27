import React, {Component} from 'react';
import './SocialMedia.css';
import Facebook from "./Facebook";
import Twitter from "./Twitter";
import Youtube from "./Youtube";

class SocialMedia extends Component {
	render() {
		return (
			<div className="SocialMedia">
				<Facebook/>
				<Twitter/>
				<Youtube/>
			</div>
		);
	}
}

export default SocialMedia;
