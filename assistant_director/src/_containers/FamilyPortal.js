import React, { Component } from 'react';
import FamilyCheckIn from '../_components/FamilyCheckIn';
import FamilyDash from '../_components/FamilyDash';
const axios = require('axios')

class FamilyPortal extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            family: null,
        };
    }



    verifyFamily(name, password){
        console.log(name + ' ' + password);
        axios({
            method: 'POST',
            url: 'api/family/' + name,
            data: {data: password}
        })
        .then(response => {
            console.log(response);
            this.setState({ family: response.data});
        });
    }
    render(){
        return(
            <div className="Family">
                {this.state.family === null && (
                    <FamilyCheckIn
                        family={this.state.family}
                        families={this.props.families}
                        onFamilyLogin={this.verifyFamily.bind(this)} />
                )}
                {this.state.family !== null && (
                    <FamilyDash
                        isFamily={this.props.isFamily}
                        family={this.state.family}
                        onCheckinStudent={this.props.onCheckinStudent} /> 
                )} 
            </div>
        )
    }
}
export default FamilyPortal