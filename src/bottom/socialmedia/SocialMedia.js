import React, {Component} from 'react';
import './SocialMedia.css';
import Facebook from "./facebook/Facebook";
import Twitter from "./twitter/Twitter";
import Youtube from "./youtube/Youtube";

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
