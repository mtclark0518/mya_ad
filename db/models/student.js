var db = require('./index');

const Location = db.Location
const Family = db.Family

module.exports = function(sequelize, Sequelize) {
    var student = sequelize.define('student', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        locationId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            },
        familyId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        firstName: {
            type: Sequelize.STRING
        },
        gender: Sequelize.STRING,
    });
    return student;
};