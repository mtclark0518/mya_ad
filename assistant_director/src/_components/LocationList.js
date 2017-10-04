import React, {Component} from 'react';
// import {CSSTransitionGroup} from 'react-transition-group'
import { Container } from 'semantic-ui-react';
import Location from './Location';
import Student from './Student'
import '../_styles/main.css';
// import '../_styles/animation.css'

class LocationList extends Component {
    render(){

        const currentStudents = [];
        const studentArray = this.props.students.map( (student) => {
            if(student.checkedIn === true){            
            console.log(student);
            return(
                    <Student
                        checkedIn={student.checkedIn}
                        id={student.id}
                        locationId={student.locationId}
                        firstName={student.firstName}
                        gender={student.gender}
                        homeRoom={student.homeRoom}
                        onMoveStudent={this.props.onMoveStudent} />
            )} else {
                console.log('not checked in');
                return    
            }
        });


        const locationArray = this.props.locations.map( (location) => {
            const roomsCurrentStudents = []
            studentArray.forEach(function(student) {
            if (student !== undefined) {
                console.log('student checked in')
                console.log(location.id)
                console.log(student.props.locationId)
                let stu = student.props;
                let room = student.props.locationId;
                currentStudents.push(stu);
                if ( location.id === room){
                    console.log(student.props.firstName + ' belongs to ' + location.name)
                    roomsCurrentStudents.push(stu)
                }
            }
            console.log('this is ' + location.name + '\'s students: ')
            console.log(roomsCurrentStudents);
        });            return(
                <Location
                    isFamily={this.props.isFamily} 
                    key={location.id}
                    id={location.id}
                    onMoveStudent={this.props.onMoveStudent}
                    currentStudents={roomsCurrentStudents}
                    name={location.name}
                    studentCapacity={location.studentCapacity}/>
            )   
        })
        return(
                <Container className='locations'>
                    {locationArray}            
                </Container>
        )
    }
}
export default LocationList

