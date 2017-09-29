



var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://deuxrlvwqstnaz:45440acbf08f899439afb6c6c65384eae72bce47ae44095c12a32d7fee58b8fa@ec2-174-129-239-0.compute-1.amazonaws.com:5432/ddm2j0mk76qfm7' || 'postgres://TheTDrive@localhost5432/project4');
    
//----------_------------------_-------------_----_---------
// import models as sequelize models
//----------_------------------_-------------_----_---------
const Teacher = sequelize.import('./teacher');
const Location = sequelize.import('./location');
const Student = sequelize.import('./student');

    

//----------_------------------_-------------_----_---------
// define model relatioships
//----------_------------------_-------------_----_---------
Student.belongsTo(Location);
Location.hasMany(Student);

Teacher.belongsTo(Location);
Location.hasMany(Teacher);


// wrap up our models into a variable
var db = {};

db.models = {
    Teacher,
    Location,
    Student,
};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// send our models
module.exports = db;