import React from 'react';

export default class Projects extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div className="row">
				<div className="fullPage" id="projects">
					<h1>Projects</h1>
					<div className="row">
						<div className = "col-xs-4" id="project1">
							<h2>HackOrg</h2>
							<p>Streamlining hackathon attendance, one QR code at a time.</p>
						</div>
						<div className = "col-xs-4" id="project2">
							<h2>RaspAlarm</h2>
							<p>Removing tech from our early morning routine with React, Node, Express, MongoDB and a Raspberry Pi.</p>
						</div>
						<div className = "col-xs-4" id="project3">
							<h2>RIP/RAV</h2>
							<p>A bubble popping game using Phaser.io</p>
						</div>
					</div>
					<div className="row">
						<div className = "col-xs-4" id="project4">
							<h2>Project 4</h2>
							<p>Description for Project 4 Goes Here</p>
						</div>
						<div className = "col-xs-4" id="project5">
							<h2>Project 5</h2>
							<p>Description for Project 5 Goes Here</p>
						</div>
						<div className = "col-xs-4" id="project6">
							<h2>Project 6</h2>
							<p>Description for Project 6 Goes Here</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}