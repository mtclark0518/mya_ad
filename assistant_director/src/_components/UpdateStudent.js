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
					<div className='updateStudentInputContainer'>
	        <Form.Field className="updateStudentFormInput">
	          <Radio
	            label='G'
	            name='radioGroup'
	            value='1'
	            checked={this.state.value === '1'}
	            onChange={this.handleChange}
	          />
	        </Form.Field>
	        <Form.Field className="updateStudentFormInput">
	          <Radio
	            label='S'
	            name='radioGroup'
	            value='2'
	            checked={this.state.value === '2'}
	            onChange={this.handleChange}
	          />
	        </Form.Field>
	        <Form.Field className="updateStudentFormInput">
	          <Radio
	            label='H'
	            name='radioGroup'
	            value='3'
	            checked={this.state.value === '3'}
	            onChange={this.handleChange}
	          />
	        </Form.Field>
	        <Form.Field className="updateStudentFormInput">
	          <Radio
	            label='R'
	            name='radioGroup'
	            value='4'
	            checked={this.state.value === '4'}
	            onChange={this.handleChange}
	          />
	        </Form.Field>
					</div>
	        <Form.Field control={Button}>Submit</Form.Field> 
	      </Form>
	    )
	  }
}
export default UpdateStudent;

