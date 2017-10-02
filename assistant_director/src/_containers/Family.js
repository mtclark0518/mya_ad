import React, { Component } from 'react';
import FamilyCheckIn from '../_components/FamilyCheckIn';

const axios = require('axios');


class Family extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            family: '',
            families: []
        };
    }

    componentDidMount() {
        this.loadFamilies();
    }
    loadFamilies(){
        axios.get('api/families')
        .then(response => {
            this.setState({ families: response.data });
        })
    }

    verifyFamily(id, pin){
        axios({
            method: 'GET',
            url: 'api/family/' + id,
            data: {data: pin}
        })
        .then(response => {
            this.setState({ family: response.data});
        });
    }
    render(){
        return(
            <div className="family">
                <div>Welcome {this.state.family} Family</div>
                <FamilyCheckIn
                    family={this.state.family}
                    onFamilyLogin={this.verifyFamily.bind(this)} />      
            
                <div>students to check-in</div>
            </div>
        )
    }
}
export default Family