const _ = require('lodash');
const User = require('./user/resolvers');

module.exports = _.merge(
  User,
);