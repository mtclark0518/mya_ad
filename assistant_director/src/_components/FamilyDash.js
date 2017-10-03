import React, { Component } from 'react';
import { Button, Card} from 'semantic-ui-react';
import Student from './Student'
import CheckinStudent from './CheckinStudent'
class FamilyDash extends Component {
    render() {
            let familiesStudents = this.props.family.students.map( (student) => {
                console.log(student);
                return(
                    <Student
                        key={student.id}
                        firstName={student.firstName}
                        familyId={student.familyId}
                        locationId={student.locationId}
                        gender={student.gender}
                        onCheckin={this} />
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