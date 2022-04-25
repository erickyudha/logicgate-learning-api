const sequelize = require('./db-handler');

const getLeaderboards = async (request, h) => {
    sequelize.authenticate();
    const [ result, metaData ] = await sequelize.query('SELECT nama, score, time FROM leaderboards');
    return result;
}



module.exports = {
    getLeaderboards,
}