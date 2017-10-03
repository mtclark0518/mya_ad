import React, {Component} from 'react';
import { Button, Card } from 'semantic-ui-react';

class CheckinStudent extends Component {



    checkinStudent(event){
        console.log('checkin student function started')
        console.log(this)
        // this.props.onCheckin();

    }
    render(){
        return(
                <div>
                    <div>
                        {this.props.students}
                    </div>                 
                    <div>
                        <Button basic color="blue"
                        onClick={this.checkinStudent}>check-in</Button>
                    </div>
                </div>
        )
    }
}
export default CheckinStudent