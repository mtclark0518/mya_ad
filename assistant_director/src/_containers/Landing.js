import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../_styles/main.css';
// import {CSSTransitionGroup} from 'react-transition-group'
import LocationList from '../_components/LocationList';
import '../_styles/main.css';
// import '../_styles/animation.css'
const axios = require('axios');
// import StudentService from '../_services/Student'



class Landing extends Component {

	constructor(props){
		super(props);
		this.state = {
			locations: [],
			students: []
		};
	}
	
	componentDidMount() {
      this.loadData();
    }
    loadData(){
      axios.get('api/locations')
        .then(response => {
        	this.setState({ locations: response.data});
			console.log(this.state.locations);})
			.then(axios.get('api/students')
			.then(response => {
				this.setState({ students: response.data });
			}));
	}
	moveStudent(id, item){
		console.log('move student has been called');
		axios({
			method: 'PUT',
			url: 'api/student/'+id, 
			data:{data: item}})
			.then(response => {
				console.log(response.data);
				this.loadData();
			});
	}

	
	login = () => this.props.auth.login()

	render() {
		const { isAuthenticated } = this.props.auth;
		return ( 
			<div className = "homePage" > 
			{
				!isAuthenticated() && ( 
					<div className="landing">
					<h1>My AD</h1>
					<h6>Classroom Management & Ratio Maintenance</h6>
					<h4>
					You are not logged in! Please { ' ' } <a style = {{ cursor: 'pointer' } } onClick = { this.login.bind(this) }> Log In </a> { ' ' } to continue. 
					</h4>

					</div>
				)
			}
			{
				isAuthenticated() && (
					<div>
						<div>
								<button className='link'>admin</button>
								<LocationList
									locations={this.state.locations}
									students={this.state.students}
									onMoveStudent={this.moveStudent.bind(this)} />
						</div>
						
					</div>
				)
			}
			</div> 
		);
	}
}

export default Landing
