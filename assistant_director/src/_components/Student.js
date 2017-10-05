import React,{Component} from 'react'
import '../_styles/main.css'
import UpdateStudent from './UpdateStudent'
import CheckinStudent from './CheckinStudent'
import CheckoutStudent from './CheckoutStudent';
import { Container, Button, Label, Icon, Divider, Card, Segment } from 'semantic-ui-react';

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
                    <CheckoutStudent
                        student={this.props}
                        onCheckin={this.checkin.bind(this)}
                        onCheckinStudent={this.props.onCheckinStudent} />
                )}
                <Segment>
                    {this.state.present === true && this.state.updating === false && this.props.isFamily !== true && (
                        <Button 
                            icon='move' 
                            content='move' 
                            labelPosition='left' 
                            onClick={this.update} color="black" 
                            label={{as: 'a', basic: true, content:this.props.firstName}} />
                    )}
                    {this.state.present === true && this.state.updating === true && this.props.isFamily !== true && (
                        <UpdateStudent
                            onUpdate={this.update.bind(this)}
                            student={this.props}
                            onMoveStudent={this.props.onMoveStudent} />
                    )}
                </Segment>
            </div>
        )
    }
}
export default Student

