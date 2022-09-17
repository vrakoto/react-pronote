const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('pronote', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = {
    sequelize
}