

import React,{Component} from 'react'
import '../_styles/main.css'
import UpdateStudent from './UpdateStudent'

class Student extends Component {
    constructor(props){
        super(props)
        this.state = {
            updating: false
        }
        this.update = this.update.bind(this)
    }

    update(){
        this.setState(prevState => ({
            updating : !prevState.updating
        }))
        console.log(this.state.updating)

    }
    render(){
        let updateStudent = this.state.updating          
        return(

        <div className="students">
            {
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
                updateStudent === false && (
                    <div className='student'>
                        <span>{this.props.firstName} </span> 
                        <span> {this.props.lastName}</span>
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

