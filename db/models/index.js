



var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://TheTDrive@localhost:5432/project4');
    
//----------_------------------_-------------_----_---------
// import models as sequelize models
//----------_------------------_-------------_----_---------
const Teacher = sequelize.import('./teacher');
const Location = sequelize.import('./location');
const Family = sequelize.import('./family');
const Student = sequelize.import('./student');
const Center = sequelize.import ('./center');

    

//----------_------------------_-------------_----_---------
// define model relatioships
//----------_------------------_-------------_----_---------


Family.hasMany(Student);

Center.hasMany(Student);
Center.hasMany(Location);
Center.hasMany(Teacher);

Location.hasMany(Student);
Location.hasMany(Teacher);
Location.belongsTo(Center);

Student.belongsTo(Family);
Student.belongsTo(Center);
Student.belongsTo(Location);

Teacher.belongsTo(Center);
Teacher.belongsTo(Location);



// wrap up our models into a variable
var db = {};

db.models = {
    Teacher,
    Location,
    Student,
    Family,
    Center
};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// send our models
module.exports = db;