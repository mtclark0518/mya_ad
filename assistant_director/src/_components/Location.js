
import React, {Component} from 'react'
// import {CSSTransitionGroup} from 'react-transition-group'
import Student from './Student'
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
            <div className='location'>
                <div className={this.props.name}>
                    <div
                        className='heading'
                        onClick={this.activate}>
                            <h3>{this.props.name}</h3>
                    </div>

                    <div>
                    {
                        this.state.active === true && (
                         <div>fuck u
                         {roster}
                         </div>                             
                        )
                    }
                    {
                        this.state.active === false && (
                        <p>active state false</p>
                        )
                    }
                    </div>
                </div>
             </div> 
        ) 
    }
}

export default Location


