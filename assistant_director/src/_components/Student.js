

import React,{Component} from 'react'
import '../_styles/main.css'
import UpdateStudent from './UpdateStudent'
import CheckinStudent from './CheckinStudent'

class Student extends Component {
    constructor(props){
        super(props)
        this.state = {
            updating: false,
            present: false
        }
        this.update = this.update.bind(this)
    }

    update(){
        this.setState(prevState => ({
            updating : !prevState.updating
        }))
        console.log(this.state.updating)
    }
    checkin(){
        this.setState(prevState => ({
            present : !prevState.present
        }))
    }
    render(){
        let updateStudent = this.state.updating          
        return(

        <div className="students">
            
            {
                this.state.present === false &&

                (
                    <div className="checkinStudent">
                        <CheckinStudent
                            student={this.props}
                            onCheckin={this.checkin.bind(this)} />
                    </div>
                )
            }
            {
                this.state.present === true &&
                updateStudent === true && (
                    <div className="updateStudent">
                        <UpdateStudent
                            onUpdate={this.update.bind(this)}
                            student={this.props}
                            onMoveStudent={this.props.onMoveStudent} />
                        <button
                            onClick={this.update}>cancel
                        </button>
                    </div>
                )
            }
            {
                this.state.present === true && updateStudent === false && (
                    <div className='student'>
                        <span>{this.props.firstName} </span> 
                        <button
                            onClick={this.update}>MOVE
                        </button>
                    </div>
                )
            }
        </div>
        )}

}
export default Student

