import React from 'react';

export default class Projects extends React.Component{
	constructor(props){
		super(props);
		this.goToProject.bind(this);
	}
	goToProject(link){
		console.log("This link is: "+link);
		window.location.replace(link);
	}
	render(){
		if(this.props.width < 800){
			return(
				<div className="row">
					<div className="fullPage verticalCenterLanding" id="projects">
						<h1 id="projectHeadliner">Projects</h1>
						<ul className="col-xs-12" id="projectList">
							<li id="projectListItem" onClick={()=>this.goToProject("https://github.com/sfreeman422/HackathonQR")}>
								<h2>HackOrg</h2>
								<p>Streamlining hackathon attendance, one QR code at a time.</p>
							</li>
							<li id="projectListItem" onClick={()=>this.goToProject("https://github.com/sfreeman422/RaspAlarm")}>
								<h2>RaspAlarm</h2>
								<p>De-teching the bedroom with MERN & Raspberry Pi</p>
							</li>
							<li id="projectListItem" onClick={()=>this.goToProject("https://github.com/sfreeman422/BubbleGame")}> 
								<h2>RIP/RAV</h2>
								<p>A bubble popping game using Phaser.io</p>
							</li>
							<li id="projectListItem" onClick={()=>this.goToProject("https://github.com/tomtom28/crap-yap")}>
								<h2>Crapper-Yapper</h2>
								<p>A Morse Code Based, Poop Emoji Chat App.</p> 
							</li>
							<li id="projectListItem" onClick={()=>this.goToProject("https://github.com/sfreeman422/NYTReact")}>
								<h2>NYTReact</h2>
								<p>A React Based Application Using the NYT API</p>
							</li>
							<li id="projectListItemNoBorder" onClick={()=>this.goToProject("https://github.com/sfreeman422/PersonalPage")}>
								<h2>PersonalPage</h2>
								<p>A React Based Portfolio Page</p>
							</li>
						</ul>
					</div>
				</div>
				)
		}
		else{
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
								</td>
								<td className="project" id="project2" onClick={()=>this.goToProject("https://github.com/sfreeman422/RaspAlarm")}>
									<h2>RaspAlarm</h2>
									<p>De-teching the bedroom with MERN & Raspberry Pi</p>
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
								</td>
								<td className="project" id="project5" onClick={()=>this.goToProject("https://github.com/sfreeman422/NYTReact")}>
									<h2>NYTReact</h2>
									<p>A React Based Application Using the NYT API</p>
								</td>
								<td className="project" id="project6" onClick={()=>this.goToProject("https://github.com/sfreeman422/PersonalPage")}>
									<h2>PersonalPage</h2>
									<p>A React Based Portfolio Page</p>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		)
		}
	}
}