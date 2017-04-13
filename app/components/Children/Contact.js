import React from 'react';

export default class Contact extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div className="row">
				<div className="fullpage" id="contact">
					<h1>Let's Talk</h1>
					<a href="https://github.com/sfreeman422"><img src="images/octocat.png" /></a>
					<a href="https://www.linkedin.com/in/sfreeman422"><img src="images/linkedin.png" /></a>
				</div>
			</div>
		)
	}
}