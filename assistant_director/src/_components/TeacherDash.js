import React, {Component} from 'react'
import CreateStudent from './CreateStudent'
const axios = require('axios')

class TeacherDash extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            creatingStudent: false,
        }
        this.showCreateForm = this.showCreateForm.bind(this)

    }
    showCreateForm(){
        this.state.creatingStudent
        this.setState(prevState => ({
            creatingStudent: !prevState.creatingStudent
        }))
    }

    componentDidMount(){
        this.showUser()
    }

    showUser(){
        console.log('inside the show user function')
        const userID = this.props.account.sub
        console.log(userID)
        const userToShow = { auth0:userID }

        axios({
            method: 'POST',
            url: 'api/teacher/' + userID,
            data: userToShow})
                .then(response => {
                    console.log(response.data[0].auth0)
                })
    }

    createStudent(student){
        console.log(student)
        axios({
            method: 'POST',
            url: 'api/students',
            data: student })
            .then(response => {
                console.log(response)
            })
    }
    



    render(){
        let createStudent = this.state.creatingStudent
        const firstName = this.props.account.given_name
        console.log(firstName)
        return(
                
                           
            <div className="teacherDash">
                <h1>{firstName}</h1>
                {
                    createStudent === true && (
                        <div className="wrapper">
                            <CreateStudent
                            onCreateStudent={this.createStudent.bind(this)}
                            onCreate={this.showCreateForm.bind(this)} />
                            <button onClick={this.showCreateForm}>cancel</button>
                        </div>
                    )
                }
                {
                    createStudent === false && (
                        <div className="wrapper">
                            <button onClick={this.showCreateForm}>add student</button>
                        </div>
                    )
                }


            </div>
                    
            
        )
    }
}

export default TeacherDash