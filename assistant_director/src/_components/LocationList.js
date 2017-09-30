import React, {Component} from 'react';
// import {CSSTransitionGroup} from 'react-transition-group'
import Location from './Location';
// import Student from './student'
import '../_styles/main.css';
// import '../_styles/animation.css'


class LocationList extends Component {        
    render(){

        let locationArray = this.props.locations.map( (location) => {
            return(
                <Location 
                    key={location.id}
                    id={location.id}
                    onMoveStudent={this.props.onMoveStudent}
                    students={location.students}
                    name={location.name}
                    studentCapacity={location.studentCapacity}/>
                )   
        })
        return(
            <div>

                <div className='locations'>
                    {locationArray}            
                </div>
			 
                
            </div>
        )
    }
}
export default LocationList

