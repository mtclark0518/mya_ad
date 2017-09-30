
import React, {Component} from 'react'
// import {CSSTransitionGroup} from 'react-transition-group'
// import Student from './student'
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
        console.log(activeState)
        // let classRoster = this.props.students.map( (student, index) => {
        //     return(<Student
        //         key={index}
        //         location={student.locationId}
        //         id={student.id}
        //         firstName={student.firstName} 
        //         lastName={student.lastName}
        //         gender={student.gender}
        //         pin={student.pin}
        //         onMoveStudent={this.props.onMoveStudent}/>)
        // })
        // console.log(classRoster)
        return(
            <div className='location'>
            <div className={this.props.name}>
                <div 
                    className='heading'
                    onClick={this.activate}>
                        <h3>{ this.props.name}</h3>
                </div>

                <div className={this.state.active}>
                {
                    this.state.active === true && (
                      <p>active state true</p>

                          
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


