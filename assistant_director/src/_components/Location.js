
import React, {Component} from 'react'
// import {CSSTransitionGroup} from 'react-transition-group'
import Student from './Student';
import {  List, Divider, Segment, Header } from 'semantic-ui-react';

import '../_styles/main.css';
// import '../_styles/animation.css'
// import Doughnut from './chart'

class Location extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            active: false
        }
        this.activate = this.activate.bind(this)
    }
    activate() {
        this.setState(prevState => ({
            active : !prevState.active
        }))
    } 
    
    render() {
        const activeState = this.state.active
        const roster = this.props.currentStudents.map( (student) => {
            return(<Student
                key={student.id}
                checkedIn={student.checkedIn}
                location={student.locationId}
                homeRoom={student.homeRoom}
                id={student.id}
                firstName={student.firstName} 
                gender={student.gender}
                onMoveStudent={this.props.onMoveStudent}/>)
        })
        console.log(roster)
        
        return(
            <Segment raised={true} className={this.props.name}>
                <Header onClick={this.activate}>{this.props.name}</Header>
                <Divider></Divider>
                        {this.state.active === true && (
                            <div className="roster">{roster}</div>                             
                        )}
                        {this.state.active === false && (
                            <div>{roster.length} : {this.props.studentCapacity}</div>
                        )}
            </Segment> 
        ) 
    }
}

export default Location


