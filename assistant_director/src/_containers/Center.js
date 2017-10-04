import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Button, Icon } from 'semantic-ui-react';
// import LocationList from '../_components/LocationList';
import '../_styles/main.css';
import StaffPortal from './StaffPortal';
import FamilyPortal from './FamilyPortal';
import Profile from './Profile';
// import Profile from './Profile';
const axios = require('axios');


class Center extends Component {
    goTo(route) {this.props.history.replace( `/${route}` )}
    login() { this.props.auth.login(); }
    logout() { this.props.auth.logout(); }

	componentDidMount() {
      this.loadData();
    }
	constructor(props){
		super(props);
		this.state = {
            isFamily: false,
            center: '',
			locations: [],
            students: [],
            families: []
        };
        this.toggleFamilyPortal = this.toggleFamilyPortal.bind(this);
    }
    toggleFamilyPortal() {
        this.setState(prevState => ({
            isFamily : !prevState.isFamily
        }));
    }
	

    loadData(){
        axios.get('api/center/1')
            .then(response => { 
                console.log(response)
                this.setState( { center: response.data } );
                this.setState( { locations: response.data.locations } );
                this.setState( { students: response.data.students } );
            })
            .then(
                axios.get('api/families')
                .then(response => {
                    console.log(response);
                    this.setState( { families: response.data } );
                })
            );
    }

	moveStudent(id, item){
		console.log('move student has been called');
		axios({
			method: 'PUT',
			url: 'api/student/' + id, 
            data:{data: item}
        }).then(response => {
    		console.log(response.data);
            this.loadData();
		});
    }
    checkinStudent(id, checkin, homeRoom){
        console.log('checkin student called');
        axios({
            method: 'PUT',
            url: 'api/student/checkin/' + id ,
            data: { checkin : checkin, homeRoom : homeRoom}
        }).then(response => {
            console.log(response.data);
            this.loadData();
        })
    }
        
	render() {
        let profile;
		const { isAuthenticated } = this.props.auth;
		return ( 
			<div className = "Center" > 
                <Header as='h1' className="App-header">
                    <Header.Content>
                        { !isAuthenticated() && this.state.isFamily === false && (<Button className="primary" onClick={this.login.bind(this)}>Staff-Portal</Button>)}
                        { isAuthenticated() && (
                            <div>
                                <Button className="primary" onClick={this.logout.bind(this)}>Staff-Logout</Button>
                                <Link className='settingsButton' to='/profile'><Button icon='settings'></Button></Link>
                            </div>
                            )}
                        { !isAuthenticated() && (<Button className="primary" onClick={this.toggleFamilyPortal.bind(this)}>Family-Portal</Button>) }
                    </Header.Content>
                </Header>
            { !isAuthenticated() && this.state.isFamily !== true && (
                <div className="about">
                    <h1>welcome to {this.state.center.name}</h1>
                    <p> please choose a portal <br/> powered by 'Mya AD' </p>
                </div>
            )}    
            {
                !isAuthenticated() && this.state.isFamily === true && (
                    <div>
                        <FamilyPortal
                            families={this.state.families}
                            locations={this.state.locations}
                            onCheckinStudent={this.checkinStudent.bind(this)}
                            isFamily={this.state.isFamily} />
                    </div>
                )
            }
            {
                isAuthenticated() && (
                    <div>
                        <StaffPortal
                            locations={this.state.locations}
                            students={this.state.students}
                            onMoveStudent={this.moveStudent.bind(this)}
                            isFamily={this.state.isFamily} />
                    </div>
                )
            }
            </div> 
		);
	}
}

export default Center
