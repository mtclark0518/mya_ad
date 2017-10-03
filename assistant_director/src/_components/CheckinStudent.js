import React, {Component} from 'react';
import { Button, Card } from 'semantic-ui-react';

class CheckinStudent extends Component {



    checkinStudent(event){


    }
    render(){
        return(
                <div>
                    <div>
                        {this.props.student.firstName}
                    </div>                 
                    <div>
                        <Button basic color="blue"
                        onClick={this.props.onCheckin}>check-in</Button>
                    </div>
                </div>
        )
    }
}
export default CheckinStudent