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
                    <div>
                        {this.props.student.firstName}
                    </div>                 
                    <Form.Field control={Button}>check-in</Form.Field>
                </Form>
        )
    }
}
export default CheckinStudent