import React from 'react';

export default class Projects extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div className="row">
				<div className="fullpage verticalCenter" id="projects">
					<h1>Projects</h1>
					<div className="row">
						<div className = "col-xs-4" id="project">
							HackOrg
						</div>
						<div className = "col-xs-4" id="project">
							RaspAlarm
						</div>
						<div className = "col-xs-4" id="project">
							RIP/RAV
						</div>
					</div>
					<div className="row">
						<div className = "col-xs-4" id="project">
							Project 4
						</div>
						<div className = "col-xs-4" id="project">
							Project 5
						</div>
						<div className = "col-xs-4" id="project">
							Project 6
						</div>
					</div>
				</div>
			</div>
		)
	}
}