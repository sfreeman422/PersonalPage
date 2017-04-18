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
						<p id="about">Steve Freeman is Full Stack Web Developer with a passion for creating useful, unique and efficient web applications designed to help others. Steve is passionate about the MERN stack and uses it in most of his side projects. While Steve's skills primarily focus on MERN, he also has experience using Angular and relational database such as MySQL. He is passionate about all technology but really loves Android, Linux and Mac. He is currently employed as System Adminstrator and manages a plethora of servers running both Linux based OSes and Windows. In his spare time, he loves to snowboard, make music and race cars.</p>
					</div>
				</div>
			</div>
		)
	}
}