import React from 'react';

export default class Information extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div className="row">
				<div className="fullPage verticalCenterInformation" id="information">
					<div className = "col-md-6" id="profPic">
						<img src = "images/profile.png" className="img-responsive"  id = "profilePic" />
					</div>
					<div className ="col-xs-12 col-md-6" id = "aboutText">
						<h1>About</h1>
						<p id="about">Steve Freeman is Full Stack Web Developer with a passion for creating useful, unique and efficient web applications designed to help others. Steve is passionate about backend technologies and enjoys exploring the latest and greatest libraries and frameworks in his everyday coding. Steve's skills primarily focus on JavaScript related libraries such as Node.js and Passport.js however, he also has an interest in Java, as this was the first programming language he tried to teach himself. He is passionate about all technology but takes a liking to Android, Linux and Mac. Outside of being a developer, Steve works full-time as a Systems Administrator.</p>
					</div>
				</div>
			</div>
		)
	}
}