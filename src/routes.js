'use strict';
const {
    getLeaderboards, getLeaderboardsToday, postLeaderboards
} = require('./handler');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.response('Hello, world!');
            },
    },
    {
        method: 'GET',
        path: '/leaderboards/today',
        handler: getLeaderboardsToday,
    },
    {
        method: 'GET',
        path: '/leaderboards/alltime',
        handler: getLeaderboards,
    },
    {
        method: 'POST',
        path: '/leaderboards',
        handler: postLeaderboards,
    },
];
