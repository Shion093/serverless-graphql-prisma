const userSchema = `
  # import * from 'src/generated/prisma.graphql'
  
  type Mutation {
    createUser(data: UserCreateInput): User
    updateUser(id: String!, data: UserCreateInput): User
    deleteUser(id: String!, cognito: Boolean): User
    attachPolicy(cognitoIdentityId: String!): Boolean
  }
  
  type Query {
    user(id: String) : User
    me: User
  }
`;

module.exports = {
  userSchema,
};
