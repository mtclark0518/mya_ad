import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment, Button, Icon, Container, Divider, List } from 'semantic-ui-react';
// import LocationList from '../_components/LocationList';
import '../_styles/main.css';
import StaffPortal from './StaffPortal';
import FamilyPortal from './FamilyPortal';
import Profile from './Profile';
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
                    <Container>
                        <Segment raised={true}>
                            <h1>welcome to {this.state.center.name}... or whatever</h1>
                            <Segment raised={true}>
                                <Header>Mya AD: [an intelligent solution to childcare data management]</Header>
                                <Divider></Divider>
                                <Header>why?</Header>
                                    childcare as an industry has a very limited scope of tech innovation <br />
                                    licensing rules & regulations require childcare centers to maintain increasingly strict records 
                                    <br />
                                    <h5>problem1:</h5> 
                                        employees are expected to maintain these daily logs while also keeping a watchful - attentive - eye on ten kids under five...
                                        no....not impossible. but stressful to maintain with accuracy. so guess what?..usually...it isn't maintained with accuracy
                                    <br />
                                    <h5>problem2:</h5> 
                                        as an industry comprised largely of individuals from tech-averse demographics; 'old-school' (pen&&paper) recordkeeping methods are prominent
                                        a center with multiple classrooms is now required to maintian so many different records on a daily basis! which we establish via problem1 is not being done with any accuracy
                            </Segment>
                            <Segment raised={true}>
                                <Header>sooo...lution?</Header>
                                    as a former large childcare center director and early childhood education center manager - these were issues i faced daily. accountable 
                                    and accurate recordkeeping dominted my workday/thoughts and cluttered my office beyond belief. enter Mya - my awesome assitant director.
                                    staff push buttons to update classroom rosters...parents sign their children in and out of their homeroom...Mya does the rest. daily sign/in/out - done.
                                    room checkin times for all students - done. any movement logs - done...and who initiated the movement...done....i think you get it.
                            </Segment>
                        </Segment> 
                    </Container>
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
