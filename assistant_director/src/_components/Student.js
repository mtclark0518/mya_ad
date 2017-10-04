import React,{Component} from 'react'
import '../_styles/main.css'
import UpdateStudent from './UpdateStudent'
import CheckinStudent from './CheckinStudent'
import { List, Button, Label, Icon, Divider, Card } from 'semantic-ui-react';

class Student extends Component {
    constructor(props){
        super(props)
        this.state = {
            updating: false,
            present: false
        }
        this.update = this.update.bind(this)
    }

    componentDidMount(){
        this.handleState();
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
    handleState(){
        console.log('handle state function called')
        if(this.state.present !== this.props.checkedIn){
            this.checkin();
        } else { console.log('appears they are they same already')}

    }
    render(){
        return(
            <div className="students">
                {this.state.present === false && this.props.isFamily === true && (
                        <CheckinStudent
                            student={this.props}
                            onCheckin={this.checkin.bind(this)}
                            onCheckinStudent={this.props.onCheckinStudent} />

                )}
                {this.state.present === true && this.props.isFamily === true && (
                    <div className="checkoutStudent">
                        checkout student
                    </div>
                )}
                {this.state.present === true && this.state.updating === false && this.props.isFamily !== true && (
                    <List.Item className='studentProfile'>
                        <List.Content>
                        <Card>
                            <Card.Content>
                                <span className="student-card-name-label">{this.props.firstName}</span>
                                <Button icon='move' labelPosition='left' onClick={this.update} color="black" label={{content:'Move'}}></Button>
                            </Card.Content>
                        </Card>
                        </List.Content>
                    </List.Item>
                )}
                {this.state.present === true && this.state.updating === true && this.props.isFamily !== true && (
                    <div className="updateStudent">
                        <UpdateStudent
                            onUpdate={this.update.bind(this)}
                            student={this.props}
                            onMoveStudent={this.props.onMoveStudent} />
                        <Button
                            onClick={this.update}>cancel
                        </Button>
                    </div>
                )}

            </div>
        )
    }

}
export default Student

