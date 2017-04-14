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
					<table className="col-xs-12">
						<tbody>
							<tr>
								<td className="project" id="project1">
									<h2>HackOrg</h2>
									<p>Streamlining hackathon attendance, one QR code at a time.</p>
									<p>Awarded a Finalist Medal at #HackNJIT</p>
								</td>
								<td className="project" id="project2">
									<h2>RaspAlarm</h2>
									<p>Deteching the bedroom with MERN & Raspberry Pi</p>
								</td>
								<td className="project" id="project3">
									<h2>RIP/RAV</h2>
									<p>A bubble popping game using Phaser.io</p>
								</td>
							</tr>
							<tr>
								<td className="project" id="project4">
									<h2>Crapper-Yapper</h2>
									<p>A Morse Code Based, Poop Emoji Chat App.</p> 
									<p>Built for #StupidHackathon</p>
								</td>
								<td className="project" id="project5">
									<h2>Project 5</h2>
									<p>Description for Project 5 Goes Here</p>
								</td>
								<td className="project" id="project6">
									<h2>Project 6</h2>
									<p>Description for Project 6 Goes Here</p>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}