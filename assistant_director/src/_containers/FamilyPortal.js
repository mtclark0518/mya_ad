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
                    <div>
                    <FamilyCheckIn
                        family={this.state.family}
                        families={this.props.families}
                        onFamilyLogin={this.verifyFamily.bind(this)} />
                        <ul id='family-passwords'>
                            <li>
                                name: 'potter', password: '10000'
                            </li>
                            <li>    
                                name: 'weasley', password: '10001'
                            </li>
                            <li>
                                name: 'granger', password: '10002'
                            </li>
                            <li>
                                name: 'johnson', password: '10003'
                            </li>
                            <li>    
                                name: 'abbot', password: '10004'
                            </li>
                            <li>
                                name: 'finch-fletchley', password: '10005'
                            </li>
                            <li>
                                name: 'bones', password: '10006'
                            </li>
                            <li>
                                name: 'diggory', password: '10007'
                            </li>
                            <li>
                                name: 'macmillian', password: '10008'
                            </li>
                            <li>
                                name: 'boot', password: '10009'
                            </li>
                            <li>
                                name: 'corner', password: '10010'
                            </li>
                            <li>
                                name: 'patil', password: '10011'
                            </li>    
                            <li>
                                name: 'chang', password: '10012'
                            </li>
                            <li>
                                name: 'lovegood', password: '10013'
                            </li>
                            <li>
                                name: 'ackerly', password: '10014'
                            </li>
                            <li>
                                name: 'bulstrode', password: '10015'
                            </li>
                            <li>
                                name: 'crabbe', password: '10016'
                            </li>
                            <li>
                                name: 'goyle', password: '10017'
                            </li>
                            <li>
                                name: 'malfoy', password: '10018'
                            </li>
                            <li>
                                name: 'zabini', password: '10019'
                            </li>
                            <li>
                                name: 'longbottom', password: '10020'
                            </li>
                        </ul>
                    </div>
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