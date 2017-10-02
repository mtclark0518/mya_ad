module.exports = function(sequelize, Sequelize) {
    var family = sequelize.define('family', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            notNull: true
        },
        password: {
            type: Sequelize.STRING,
            notNull: true
        },
    });
    return family;
};