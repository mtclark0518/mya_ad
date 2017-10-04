import React, { Component } from 'react';
import LocationList from '../_components/LocationList';
import '../_styles/main.css';




class StaffPortal extends Component {
	

	render() {
		return ( 
			<LocationList
				isFamily={this.props.isFamily}
				locations={this.props.locations}
				students={this.props.students}
				onMoveStudent={this.props.onMoveStudent} />
		);
	}
}


export default StaffPortal
