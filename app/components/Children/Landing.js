import React from 'react';

export default class Landing extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div className="row">
				<div className="fullPage verticalCenterLanding" id="landing">
					<h1>Steve Freeman</h1>
					<h2>Full Stack Web Developer. Systems Administrator. Entrepreneur.</h2> 
				</div>
			</div>
		)
	}
}