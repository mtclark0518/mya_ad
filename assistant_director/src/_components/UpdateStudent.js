import React, {Component} from 'react';

import { Form, Button, Radio } from 'semantic-ui-react'



class UpdateStudent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: null,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (event, {value}) => {
		this.setState({value})
	}
	onFormSubmit(event) {
    event.preventDefault();
		console.log('edit submitted');
		this.props.onMoveStudent(this.props.student.id, this.state.value)
		this.props.onUpdate();
		this.setState({
			value: null,
		});
	}

	render() {
	    return (
	      <Form onSubmit={event => this.onFormSubmit(event)}>
	        <Form.Field>
	          Selected value: <b>{this.state.value} </b>
	        </Form.Field>
	        <Form.Field>
	          <Radio
	            label='Gryffindor'
	            name='radioGroup'
	            value='1'
	            checked={this.state.value === '1'}
	            onChange={this.handleChange}
	          />
	        </Form.Field>
	        <Form.Field>
	          <Radio
	            label='Slytherin'
	            name='radioGroup'
	            value='2'
	            checked={this.state.value === '2'}
	            onChange={this.handleChange}
	          />
	        </Form.Field>
	        <Form.Field>
	          <Radio
	            label='Hufflepuff'
	            name='radioGroup'
	            value='3'
	            checked={this.state.value === '3'}
	            onChange={this.handleChange}
	          />
	        </Form.Field>
	        <Form.Field>
	          <Radio
	            label='Ravenclaw'
	            name='radioGroup'
	            value='4'
	            checked={this.state.value === '4'}
	            onChange={this.handleChange}
	          />
	        </Form.Field>
	        <Form.Field control={Button}>Submit</Form.Field> 
	      </Form>
	    )
	  }
}
export default UpdateStudent;

