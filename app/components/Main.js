import React from 'react';
import Landing from './Children/Landing';
import Information from './Children/Information';
import Projects from './Children/Projects';
import Contact from './Children/Contact';

export default class Main extends React.Component{
	constructor(){
		super();
		this.state = {viewportWidth: window.innerWidth}
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	componentDidMount(){
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions.bind(this));
	}
	componentWillUnmount(){
		window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
	}
	updateWindowDimensions(){
		this.setState({viewportWidth: window.innerWidth});
	}
	render(){
		return(
		<div className="mainContent text-center">
			<Landing />
			<Information />
			<Projects width={this.state.viewportWidth} />
			<Contact />
		</div>
			) 
	}
}