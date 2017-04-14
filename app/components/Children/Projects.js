import React from 'react';

export default class Projects extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div className="row">
				<div className="fullPage" id="projects">
					<h1 id="projectHeadliner">Projects</h1>
					<div className="holder">
						<div className="row">
							<div className = "col-xs-4 project" id="project1">
								<h2>HackOrg</h2>
								<p>Streamlining hackathon attendance, one QR code at a time.</p>
							</div>
							<div className = "col-xs-4 project" id="project2">
								<h2>RaspAlarm</h2>
								<p>Deteching the bedroom with MERN & Raspberry Pi</p>
							</div>
							<div className = "col-xs-4 project" id="project3">
								<h2>RIP/RAV</h2>
								<p>A bubble popping game using Phaser.io</p>
							</div>
						</div>
						<div className="row">
							<div className = "col-xs-4 project" id="project4">
								<h2>Crapper Yapper</h2>
								<p>A Morse Code Based, Poop Emoji Chat App</p>
							</div>
							<div className = "col-xs-4 project" id="project5">
								<h2>Project 5</h2>
								<p>Description for Project 5 Goes Here</p>
							</div>
							<div className = "col-xs-4 project" id="project6">
								<h2>Project 6</h2>
								<p>Description for Project 6 Goes Here</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}