import React from 'react';

export default class Projects extends React.Component{
	constructor(){
		super();
		this.goToProject.bind(this);
	}
	goToProject(link){
		console.log("This link is: "+link);
		window.location.replace(link);
	}
	render(){
		return (
			<div className="row">
				<div className="fullPage verticalCenterLanding" id="projects">
					<h1 id="projectHeadliner">Projects</h1>
					<table className="col-xs-12" id="projectTable">
						<tbody>
							<tr>
								<td className="project" id="project1" onClick={()=>this.goToProject("https://github.com/sfreeman422/HackathonQR")}>
									<h2>HackOrg</h2>
									<p>Streamlining hackathon attendance, one QR code at a time.</p>
									<p>Awarded a Finalist Medal at #HackNJIT</p>
								</td>
								<td className="project" id="project2" onClick={()=>this.goToProject("https://github.com/sfreeman422/RaspAlarm")}>
									<h2>RaspAlarm</h2>
									<p>Deteching the bedroom with MERN & Raspberry Pi</p>
								</td>
								<td className="project" id="project3" onClick={()=>this.goToProject("https://github.com/sfreeman422/BubbleGame")}>
									<h2>RIP/RAV</h2>
									<p>A bubble popping game using Phaser.io</p>
								</td>
							</tr>
							<tr>
								<td className="project" id="project4" onClick={()=>this.goToProject("https://github.com/tomtom28/crap-yap")}>
									<h2>Crapper-Yapper</h2>
									<p>A Morse Code Based, Poop Emoji Chat App.</p> 
									<p>Built for #StupidHackathon</p>
								</td>
								<td className="project" id="project5" onClick={()=>this.goToProject("project5Link")}>
									<h2>Project 5</h2>
									<p>Description for Project 5 Goes Here</p>
								</td>
								<td className="project" id="project6" onClick={()=>this.goToProject("project6Link")}>
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