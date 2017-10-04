var db = require('./index');

module.exports = function(sequelize, Sequelize) {
    var student = sequelize.define('student', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        centerId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        locationId: {
            type: Sequelize.INTEGER
        },
        homeRoom: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        familyId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        firstName: {
            type: Sequelize.STRING
        },
        checkedIn: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        gender: Sequelize.STRING,
    });
    return student;
};