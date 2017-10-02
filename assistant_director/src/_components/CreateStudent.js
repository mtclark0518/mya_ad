import React, {Component} from 'react';


class CreateStudent extends Component {
	
	
	constructor(props) {
		super(props);
		this.state = {
                location: ' ',
                fName: ' ',
                lName: ' ',
                gender: ' '
		};
	}
	
	onLocInputChange(event){
        console.log('input has changed');
        console.log(event)
		console.log(this);
		this.setState({
			    location: event.target.value,
        });
    }
    fNameChange(event){
        this.setState({
                fName: event.target.value
            
        })
    }
    lNameChange(event){
        this.setState({
                lName: event.target.value
            
        })
    }
    genderSelect(event){
        this.setState({
                gender: event.target.value
            
        })
    }

	onFormSubmit(event) {
        event.preventDefault();
        console.log('student submitted');
        this.props.onCreateStudent(this.state)
        this.props.onCreate()
		this.setState({
            location: '', fName: '', lName: '', gender: '' 
        });
	}
	render() {
		return(
			<div className="CreateStudent">
				<form onSubmit={event => this.onFormSubmit(event)}>
					<div className="createStudentForm">
                        <div className="locationID">
                            <label>
                                <input type="radio" value="1" checked={this.state.location === "1"} onChange={locationChangeEvent => this.onLocInputChange(locationChangeEvent)}/>
                                Gryffindor
                            </label>
                            <label>
                                <input type="radio" value="2" checked={this.state.location === "2"} onChange={locationChangeEvent => this.onLocInputChange(locationChangeEvent)}/>
                                Slytherin
                            </label>
                            <label>
                                <input type="radio" value="3" checked={this.state.location === "3"} onChange={locationChangeEvent => this.onLocInputChange(locationChangeEvent)}/>
                                Hufflepuff
                            </label>
                            <label>
                                <input type="radio" value="4" checked={this.state.location === "4"} onChange={locationChangeEvent => this.onLocInputChange(locationChangeEvent)}/>
                                Ravenclaw
                            </label>
                        </div>

                        <div className="firstNameInput">
                            <label>
                                <input type="text" placeholder="first name" onChange={event => this.fNameChange(event)} />
                            </label>
                        </div>
                        <div className="lastNameInput">
                            <label>
                                <input type="text" placeholder="last name" onChange={event => this.lNameChange(event)} />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" value="male" checked={this.state.gender === "male"} onChange={genderEvent => this.genderSelect(genderEvent)}/>
                                male
                            </label>
                            <label>
                                <input type="radio" value="female" checked={this.state.gender === "female"} onChange={genderEvent => this.genderSelect(genderEvent)}/>
                                female
                            </label>
                        </div>
						<button type="submit">create</button> 
					</div>
				</form>
			</div>
		)
	}
}

export default CreateStudent;
