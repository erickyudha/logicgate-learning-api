const Sequelize = require('sequelize');

const sequelize = new Sequelize('db', 'user', 'pass', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        const [ result, metaData ] = await sequelize.query('SELECT * FROM leaderboards');
        console.log(result);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = sequelize;