import React, { Component } from 'react';
import { Form, Button, Select } from 'semantic-ui-react';
import FamilyPortal from '../_containers/FamilyPortal'



class FamilyCheckIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            password: ''
        }
    }



    updateFamily(nameEvent){
        console.log('update family function fired');
        this.setState({
            name: nameEvent.target.innerText
        });
    }
    updatePassword(passwordEvent){
        this.setState({
            password: passwordEvent.target.value
        });
    }
    onVerifyFamily(event){
        event.preventDefault();
        console.log('on verify family function fired')
        this.props.onFamilyLogin(this.state.name, this.state.password);
        this.setState({
            name: ' ', password: ' '
        });
    }
    render(){
        let familyArray = this.props.families.map( (family) => {
            return(
                <FamilyPortal
                    key={family.id}
                    id={family.id}
                    name={family.name}
                    password={family.password}
                    students={family.students} />
            )
        })
        let familyNames = []
        familyArray.forEach(function(family) {
            let fam = {key: family.props.id, text: family.props.name, value: family.props.id}
            familyNames.push(fam)
        });
        console.log(familyNames)

    
        return(
            <Form onSubmit={event=> this.onVerifyFamily(event)}>
                <Form.Group widths='equal'>
                    <Form.Select label='Name' options={familyNames} onChange={nameEvent => this.updateFamily(nameEvent)}/> 
                    <Form.Input label='Password' type='password' placeholder='password' onChange={passwordEvent => this.updatePassword(passwordEvent)}/>
                <Form.Button>Login</Form.Button>
                </Form.Group>
            </Form>
        )
    }
}

export default FamilyCheckIn;