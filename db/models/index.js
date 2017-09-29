


if(!global.hasOwnProperty('db')) {
    var Sequelize = require('sequelize');
    var sequelize = null;

    if(process.env.DATABASE_URL) {
        sequelize = new Sequelize(process.env.DATABASE_URL, {
            dialect: 'postgres',
            protocol: 'postgres',
            port: match[4],
            host: match[3],
            logging: true
        });
    } else {
        sequelize = new Sequelize('postgres://TheTDrive@localhost5432/project4', 'root', null);
    }

    global.db = {
        Sequelize : Sequelize,
        sequelize : sequelize,
        Teacher : sequelize.import(__dirname + '/db/models/teacher'),
        Student : sequelize.import(__dirname + '/db/models/student'),
        Location : sequelize.import(__dirname + '/db/models/location'),
        },
    global.db.Teacher.belongsTo(global.db.Location)
    }
}

// define the database
// var sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://TheTDrive@localhost:5432/project4');

// //----------_------------------_-------------_----_---------
// // import models as sequelize models
// //----------_------------------_-------------_----_---------
// const Teacher = sequelize.import('./teacher');
// const Location = sequelize.import('./location');
// const Student = sequelize.import('./student');

//----------_------------------_-------------_----_---------
// define model relatioships
//----------_------------------_-------------_----_---------
Student.belongsTo(Location);
Location.hasMany(Student);

// Location.hasMany(Teacher);
Teacher.belongsTo(Location);
Location.hasMany(Teacher);


// wrap up our models into a variable
var db = {};

db.models = {
    // Center,
    Teacher,
    Location,
    Student,
    // Family,
};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
// send our models

module.exports = db;