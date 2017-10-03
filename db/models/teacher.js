module.exports = function(sequelize, Sequelize) {
    var teacher = sequelize.define('teacher', {
        auth0: {
            type: Sequelize.STRING,
            notNull: true
        },
        isAdmin: {
            type: Sequelize.BOOLEAN,
            notNull: true
        }
    });
    return teacher;
};