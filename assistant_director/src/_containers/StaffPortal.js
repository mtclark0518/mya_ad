import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import LocationList from '../_components/LocationList';
import '../_styles/main.css';
import Profile from './Profile';




class StaffPortal extends Component {
	

	render() {
		return ( 
			<div className = "homePage" > 
						<div>
							<Link to="/profile">
								<Button className='link'>admin</Button>
							</Link>

							<LocationList
								isFamily={this.props.isFamily}
								locations={this.props.locations}
								students={this.props.students}
								onMoveStudent={this.props.onMoveStudent} />
						</div>	
			</div> 
		);
	}
}


export default StaffPortal
