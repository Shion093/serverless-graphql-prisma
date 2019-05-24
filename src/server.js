const { GraphQLServerLambda } = require('graphql-yoga');
const { makeExecutableSchema } = require('graphql-tools');
const { formatError } = require('apollo-errors');

const { getLoggedUser } = require('./utils/user');
const db = require('./utils/db');
const { prisma } = require('./generated/prisma-client');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
  allowUndefinedInResolve   : true,
  resolverValidationOptions : {
    requireResolversForResolveType : false
  },
});

const permissions = {
  Query    : {},
  Mutation : {},
};

const lambda = new GraphQLServerLambda({
  options     : {
    formatError,
    cors : {
      origin      : '*',
      credentials : true,
    },
  },
  schema      : executableSchema,
  context     : req => ({ ...req, db, prisma }),
  middlewares : [getLoggedUser, permissions]
});

module.exports = lambda;

