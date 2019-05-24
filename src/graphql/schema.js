const { importSchema } = require('graphql-import');

// Schemas
const { userSchema } = require('./user/schema');

const appSchema = `
  # import Query.*, Mutation.*, * from 'userSchema'
  
  type Mutation {
    _empty: String
  }
  type Query {
    _empty: String
  }
  schema {
    mutation: Mutation
    query: Query
  }
`;

const schemas = {
  appSchema,
  userSchema,
};

const typeDefs = importSchema(appSchema, schemas);

module.exports = typeDefs;
