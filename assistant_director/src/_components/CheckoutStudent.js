import React, {Component} from 'react';
import { Button, Form, Label } from 'semantic-ui-react';

class CheckoutStudent extends Component {



    onFormSubmit(event){
        event.preventDefault();
        console.log('checkinStudent has been fired');
        console.log(this.props.student.id);
        this.props.onCheckin();
        this.props.onCheckinStudent(this.props.student.id, false, null)
    }
    render(){
        return(
                <Form onSubmit={event => this.onFormSubmit(event)}>
                    <Form.Field control={Button}
                            icon='remove circle'
                            color='red'
                            content={this.props.student.firstName}
                            label={{ as: 'a', pointing: 'left', color:'red', content:'Check Out' }}>
                    </Form.Field> 
                </Form>
        )
    }
}
export default CheckoutStudent