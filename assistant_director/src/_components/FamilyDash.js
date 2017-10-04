import React, { Component } from 'react';
import { Button, Card} from 'semantic-ui-react';
import Student from './Student'

class FamilyDash extends Component {
    render() {
            let familiesStudents = this.props.family.students.map( (student) => {
                console.log(student);
                return(
                    <Student
                        key={student.id}
                        id={student.id}
                        checkedIn={student.checkedIn}
                        firstName={student.firstName}
                        familyId={student.familyId}
                        locationId={student.locationId}
                        homeRoom={student.homeRoom}
                        gender={student.gender} 
                        onCheckinStudent={this.props.onCheckinStudent}
                        isFamily={this.props.isFamily} />
                )
            })
            console.log(familiesStudents)
        return(
            <Card className="familyDash">
                <Card.Header>
                    {this.props.family.name } family:
                </Card.Header>
                <Card.Content>
                    {familiesStudents}
                </Card.Content>
            </Card>


        )
    }
}
export default FamilyDash