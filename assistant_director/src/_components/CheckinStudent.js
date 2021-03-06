import React, {Component} from 'react';
import { Button, Form } from 'semantic-ui-react';

class CheckinStudent extends Component {



    onFormSubmit(event){
        event.preventDefault();
        console.log('checkinStudent has been fired');
        console.log(this.props.student.id);
        this.props.onCheckin();
        this.props.onCheckinStudent(this.props.student.id, true, this.props.student.homeRoom)
    }
    render(){
        return(
                <Form onSubmit={event => this.onFormSubmit(event)}>
                    <Form.Field control={Button}
                            icon='check circle outline'
                            color='green'
                            content={this.props.student.firstName}
                            label={{ as: 'a', pointing: 'right', color:'green', content:'Check In' }}>
                    </Form.Field> 
                </Form>
        )
    }
}
export default CheckinStudent

