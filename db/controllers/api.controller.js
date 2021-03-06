const db = require('../models');



//----------------------------------------------------------------
    //CENTER//----------------------------------------------------------------
//----------------------------------------------------------------

// the center is the top level component of the application - it will hold everything 
// it will be hard coded for now as the application doesn't need to be scaled for use by multiple centers

function showCenter(req, res) {
    db.models.Center.findOne(
        {
            include: [ {model: db.models.Student}, {model: db.models.Location}, {model: db.models.Teacher} ],
            where: { id : 1 },
        })
        .then(function(center){
            console.log('center coming your way');
            res.json(center);
        });
}


    
//----------------------------------------------------------------
    //TEACHERS(USERS)//----------------------------------------------------------------
//----------------------------------------------------------------
    
// GET ALL TEACHERS
function getTeachers(req, res) {
    db.models.Teacher.findAll().then(function(teachers) {
        console.log('here are your teachers');
        res.json(teachers);
    });
}

//SHOW TEACHERS - saves user to database
function showTeacher(req, res) {
    console.log('showing ur teach boss');
    console.log(req.body);
    db.models.Teacher.findOrCreate({ where: { auth0: req.body.auth0 } }).then(function(teacher) {
        console.log('heres your new or found teacher');
        res.json(teacher);
    });
}


//----------------------------------------------------------------
    //FAMILIES//----------------------------------------------------------------
//----------------------------------------------------------------

function getFamilies(req, res) {
    db.models.Family.findAll({
        include: [ { model: db.models.Student } ]
    }).then(function(families) {
        console.log('here are the families');
        res.json(families);
    });
}
function showFamily(req,res){
    console.log(req.params);
    console.log(req.body)
    db.models.Family.findOne({
        include: [ { model: db.models.Student } ],
        where: {
            name: req.params.name
        }
    })
    .then(family => {
        console.log('family found');

        if (family.dataValues.password === req.body.data) {
            console.log('passwords match');
            res.json(family);
        } else {
            console.log('passwords do not match');
            res.sendStatus(404);
        }
    });
}

//----------------------------------------------------------------
    //STUDENTS//----------------------------------------------------------------
//----------------------------------------------------------------

function getStudents(req, res) {
    db.models.Student.findAll().then(function(students) {
        console.log('here are the students');
        res.json(students);
    });
}

function showStudent(req,res){
    console.log(req.params.id);
    const id = req.params.id;
    db.models.Student.findOne({
        where: {
            id: id
        }
    })
    .then(student => {
        console.log('here is your student');
        res.json(student);
    });
}

function createStudent(req, res){
    const locationId = req.body.location;
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const gender = req.body.gender;
    console.log('create student req initiated');
    db.models.Student.create({
        locationId : locationId,
        firstName : firstName,
        lastName : lastName,
        gender : gender
    })
    .then(student => {
        console.log(student);
        res.json(student);
    });
}
function updateStudent(req,res){
    console.log('updateStudentReqeust has been initiated'); 
    console.log(req.body);
    db.models.Student.findOne({
        where: { id: req.params.id }
    })
    .then(student => {
        console.log('first checkin')
        student.updateAttributes({
            locationId: req.body.data
        })
        .then(updatedStudent => {
            console.log('response prepared');
            console.log(updatedStudent);
            res.json(updatedStudent);
        });
    });
}
function checkinStudent(req,res){
    console.log('checkinStudent has been initiated'); 
    console.log(req.body);
    db.models.Student.findOne({
        where: { id: req.params.id }
    })
    .then(student => {
        console.log('first checkin')
        student.updateAttributes({
            locationId: req.body.homeRoom,
            checkedIn: req.body.checkin
        })
        .then(updatedStudent => {
            console.log('response prepared');
            console.log(updatedStudent);
            res.json(updatedStudent);
        });
    });
}

//----------------------------------------------------------------
    //LOCATIONS//----------------------------------------------------------------
//----------------------------------------------------------------
function showLocations(req, res) {
    db.models.Location.findAll({
        include: [ { model: db.models.Student } ]
    }).then(function(locations) {
        console.log('here are your locations');
        res.json(locations);
    });
}

module.exports = {
    showCenter: showCenter,
    getTeachers: getTeachers,
    showTeacher: showTeacher,
    getFamilies: getFamilies,
    showFamily: showFamily,
    getStudents: getStudents,
    showStudent: showStudent,
    createStudent: createStudent,
    updateStudent: updateStudent,
    checkinStudent: checkinStudent,
    showLocations: showLocations
};