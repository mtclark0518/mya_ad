import React, {Component} from 'react';


class UpdateStudent extends Component {
	
	
	constructor(props) {
		super(props);
		this.state = {
			value: " "
		}
	}
	
	onInputChange(event){
		console.log('input has changed');
		console.log(this)
		this.setState({
			value: event.target.value,
		});
	}

	onFormSubmit(event) {
        event.preventDefault();
		console.log('edit submitted');
		this.props.onMoveStudent(this.props.student.id, this.state.value)
		this.props.onUpdate();
		this.setState({
			value: '',
		});
	}
	render() {
		return(
			<div className="UpdateStudent">
				<form onSubmit={event => this.onFormSubmit(event)}>
                    
					<div className="locationUpdateContainer">
						<div className="radioInput">
							<label>
								<input value="1" type="radio" checked={this.state.value === "1"} onChange={event => this.onInputChange(event)}/>
							Gryffindor
							</label>
						</div>
						<div className="radioInput">
							<label>
								<input value="2" type="radio" checked={this.state.value === "2"} onChange={event=> this.onInputChange(event)}/>
							Slytherin
							</label>
						</div>
						<div className="radioInput">
							<label>
								<input value="3" type="radio" checked={this.state.value === "3"} onChange={event=> this.onInputChange(event)}/>
							Hufflepuff
							</label>
						</div>
						<div className="radioInput">
							<label>
								<input value="4" type="radio" checked={this.state.value === "4"} onChange={event=> this.onInputChange(event)}/>
							Ravenclaw
							</label>
						</div>
						<button type="submit">update</button> 
					</div>
				</form>
			</div>
		)
	}
}

export default UpdateStudent;
