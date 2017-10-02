



var Sequelize = require('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://TheTDrive@localhost:5432/project4');
    
//----------_------------------_-------------_----_---------
// import models as sequelize models
//----------_------------------_-------------_----_---------
const Teacher = sequelize.import('./teacher');
const Location = sequelize.import('./location');
const Family = sequelize.import('./family');
const Student = sequelize.import('./student');

    

//----------_------------------_-------------_----_---------
// define model relatioships
//----------_------------------_-------------_----_---------


Student.belongsTo(Location);
Location.hasMany(Student);

Teacher.belongsTo(Location);
Location.hasMany(Teacher);

Student.belongsTo(Family);
Family.hasMany(Student);
// wrap up our models into a variable
var db = {};

db.models = {
    Teacher,
    Location,
    Student,
    Family
};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// send our models
module.exports = db;