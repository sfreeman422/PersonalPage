import React from 'react';

export default class Contact extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div className="row">
				<div className="fullPage verticalCenterLanding" id="contact">
					<div className="row">
						<div className="col-xs-12">
							<h1>Let's Talk</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-4">
							<a href="https://github.com/sfreeman422"><img src="images/octocat.png" id="contactPic"/></a>
						</div>
						<div className="col-xs-4">
							<a href="https://www.linkedin.com/in/sfreeman422"><img src="images/linkedin.png" id="contactPic"/></a>
						</div>
						<div className="col-xs-4">
							<a href="mailto:sfreeman422@gmail.com"><img src="images/gmail.png" id="contactPic"/></a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}