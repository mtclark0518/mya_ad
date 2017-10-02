import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class FamilyCheckIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            password: ''
        }
    }
    render(){
        return(
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input label='Name' />
                    <Form.Input label='Password' placeholder='password' />
                <Form.Button>Login</Form.Button>
                </Form.Group>
            </Form>
        )
    }
}

export default FamilyCheckIn;