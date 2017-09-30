import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
	
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
						</div>
						
					</div>
				)
			}
			</div> 
		);
	}
}

export default Landing
