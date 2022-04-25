const sequelize = require('./db-handler');

const getLeaderboards = async (request, h) => {
    try {
        sequelize.authenticate();
        const sql = 'SELECT name, score, time FROM leaderboards ORDER BY score DESC LIMIT 10';
        const [ result, metaData ] = await sequelize.query(sql);
        
        const response = h.response({
            status: "success",
            message: "Get leaderboards successfully",
            data: result,
        });
        response.code(200);
        return response;
    } catch (error) {
        const response = h.response({
            status: 'error',
            message: error.message,
        });
        response.code(500);
        return response;
    }
}

const getLeaderboardsToday = async (request, h) => {
    try {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        console.log(yesterday); // 👉️ "Thu Jan 13 2022"

        function padTo2Digits(num) {
            return num.toString().padStart(2, '0');
        }

        function formatDate(date) {
            return [
                date.getFullYear(),
                padTo2Digits(date.getMonth() + 1),
                padTo2Digits(date.getDate()),
            ].join('-');
        }

        const date = formatDate(yesterday)
;
        sequelize.authenticate();
        const sql = `SELECT name, score, time FROM leaderboards WHERE time >= "${date}" ORDER BY score DESC LIMIT 10`;
        const [ result, metaData ] = await sequelize.query(sql);

        console.log(result);

        const response = h.response({
            status: "success",
            message: "Get leaderboards successfully",
            data: result,
        });
        response.code(200);
        return response;
    } catch (error) {
        const response = h.response({
            status: 'error',
            message: error.message,
        });
        response.code(500);
        return response;
    }
}

const postLeaderboards = async (request, h) => {
    try {
        sequelize.authenticate();
        const { name, score, time } = request.payload;
        const sql = 'INSERT INTO leaderboards (name, score, time) VALUES (?, ?, ?)';
        const [ result, metaData ] = await sequelize.query(sql, {
            replacements: [ name, score, time ],
        });

        const response = h.response({
            status: "success",
            message: "Post leaderboards successfully",
        });
        response.code(200);
        return response;
    } catch (error) {
        const response = h.response({
            status: 'error',
            message: error.message,
        });
        response.code(500);
        return response;
    }
}


module.exports = {
    getLeaderboards, getLeaderboardsToday, postLeaderboards,
}