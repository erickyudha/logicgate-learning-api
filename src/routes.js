'use strict';
const {
    getLeaderboards
} = require('./handler');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: getLeaderboards,
    },
    {
        method: 'GET',
        path: '/leaderboards/today',
        handler: (request, h) => {return 'Hello World!'},
    },
    {
        method: 'GET',
        path: '/leaderboards/alltime',
        handler: (request, h) => {return 'Hello World!'},
    },
    {
        method: 'POST',
        path: '/leaderboards',
        handler: (request, h) => {return 'Hello World!'},
    },
];
