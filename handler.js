'use strict';
const lambda = require('./src/server');
const postAuthTrigger = require('./src/triggers/postAuthTrigger');
const sesNotifications = require('./src/triggers/sesNotifications');

module.exports = {
  server     : lambda.graphqlHandler,
  playground : lambda.playgroundHandler,
  postAuthTrigger,
  sesNotifications,
};
