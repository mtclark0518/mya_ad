module.exports = function(sequelize, Sequelize) {
    var location = sequelize.define('location', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING
        },
        studentCapacity: {
            type: Sequelize.INTEGER,
            notNull: true
        },
    });
    return location;
};