module.exports = function(sequelize, Sequelize) {
    var center = sequelize.define('center', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            notNull: true,
        },
        maxCapacity: {
            type: Sequelize.INTEGER,
            notNull: true
        },
    });
    return center;
};