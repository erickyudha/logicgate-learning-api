const Sequelize = require('sequelize');

const sequelize = new Sequelize('logicgate-learning', 'root', '', {
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
let leaderboardsData;

async function getLeaderboards() {
    await sequelize.authenticate();
    const [ result, metaData ] = await sequelize.query('SELECT nama, score, time FROM leaderboards');
    leaderboardsData = result;
    console.log(leaderboardsData);
}

module.exports = sequelize;