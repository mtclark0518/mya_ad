import React, { Component } from 'react';
import FamilyCheckIn from '../_components/FamilyCheckIn';
import FamilyDash from '../_components/FamilyDash';
const axios = require('axios');


class Family extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            family: null,
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
        }).then( ()=> {
            if(this.state.family === null){
                console.log( 'one')
            } else { console.log('two')}
        })
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
            this.loadFamilies();
        });
    }
    render(){
        return(
            <div className="Family">
            {
                this.state.family === null &&
                (
                    <FamilyCheckIn
                        family={this.state.family}
                        families={this.state.families}
                        onFamilyLogin={this.verifyFamily.bind(this)} />
                )
            }
            {
                this.state.family !== null &&
                (
                    <FamilyDash
                        family={this.state.family} />
                )
            }
            </div>
        )
    }
}
export default Family