const router = require('express').Router();
const apiController = require('../db/controllers/api.controller');



//get teachers
router.get('/api/teachers', apiController.getTeachers);
//show or create a teacher
router.post('/api/teacher/:auth', apiController.showTeacher);


//get all students
router.get('/api/students', apiController.getStudents);
//show a student
router.get('/api/student/:id', apiController.showStudent);
//create a student
router.post('/api/students', apiController.createStudent);
//update a student
router.put('/api/student/:id', apiController.updateStudent);

//get all families
router.get('/api/families', apiController.getFamilies);
//get one family -- family 'auth' check
router.post('/api/family/:name', apiController.showFamily);

//show all possible locations
router.get('/api/locations', apiController.showLocations);


module.exports = router;