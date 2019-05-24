const { makePrismaBindingClass } = require('prisma-binding')


/**
 * Type Defs
*/

const typeDefs = `type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteUser(where: UserWhereUniqueInput!): User
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  user(where: UserWhereUniqueInput!): User
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

enum Role {
  GUEST
  OWNER
  ADMIN
  USER
  GODMODE
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User implements Node {
  id: ID!
  firstName: String
  lastName: String
  email: String!
  phoneNumber: String
  countryCode: Int
  role: Role
  profilePic: String
  gender: String
  address: String
  position: String
  trial: Boolean
  cognitoId: String!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  firstName: String
  lastName: String
  email: String!
  phoneNumber: String
  countryCode: Int
  role: Role
  profilePic: String
  gender: String
  address: String
  position: String
  trial: Boolean
  cognitoId: String!
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  phoneNumber_ASC
  phoneNumber_DESC
  countryCode_ASC
  countryCode_DESC
  role_ASC
  role_DESC
  profilePic_ASC
  profilePic_DESC
  gender_ASC
  gender_DESC
  address_ASC
  address_DESC
  position_ASC
  position_DESC
  trial_ASC
  trial_DESC
  cognitoId_ASC
  cognitoId_DESC
}

type UserPreviousValues {
  id: ID!
  firstName: String
  lastName: String
  email: String!
  phoneNumber: String
  countryCode: Int
  role: Role
  profilePic: String
  gender: String
  address: String
  position: String
  trial: Boolean
  cognitoId: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  firstName: String
  lastName: String
  email: String
  phoneNumber: String
  countryCode: Int
  role: Role
  profilePic: String
  gender: String
  address: String
  position: String
  trial: Boolean
  cognitoId: String
}

input UserUpdateManyMutationInput {
  firstName: String
  lastName: String
  email: String
  phoneNumber: String
  countryCode: Int
  role: Role
  profilePic: String
  gender: String
  address: String
  position: String
  trial: Boolean
  cognitoId: String
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  phoneNumber: String

  """All values that are not equal to given value."""
  phoneNumber_not: String

  """All values that are contained in given list."""
  phoneNumber_in: [String!]

  """All values that are not contained in given list."""
  phoneNumber_not_in: [String!]

  """All values less than the given value."""
  phoneNumber_lt: String

  """All values less than or equal the given value."""
  phoneNumber_lte: String

  """All values greater than the given value."""
  phoneNumber_gt: String

  """All values greater than or equal the given value."""
  phoneNumber_gte: String

  """All values containing the given string."""
  phoneNumber_contains: String

  """All values not containing the given string."""
  phoneNumber_not_contains: String

  """All values starting with the given string."""
  phoneNumber_starts_with: String

  """All values not starting with the given string."""
  phoneNumber_not_starts_with: String

  """All values ending with the given string."""
  phoneNumber_ends_with: String

  """All values not ending with the given string."""
  phoneNumber_not_ends_with: String
  countryCode: Int

  """All values that are not equal to given value."""
  countryCode_not: Int

  """All values that are contained in given list."""
  countryCode_in: [Int!]

  """All values that are not contained in given list."""
  countryCode_not_in: [Int!]

  """All values less than the given value."""
  countryCode_lt: Int

  """All values less than or equal the given value."""
  countryCode_lte: Int

  """All values greater than the given value."""
  countryCode_gt: Int

  """All values greater than or equal the given value."""
  countryCode_gte: Int
  role: Role

  """All values that are not equal to given value."""
  role_not: Role

  """All values that are contained in given list."""
  role_in: [Role!]

  """All values that are not contained in given list."""
  role_not_in: [Role!]
  profilePic: String

  """All values that are not equal to given value."""
  profilePic_not: String

  """All values that are contained in given list."""
  profilePic_in: [String!]

  """All values that are not contained in given list."""
  profilePic_not_in: [String!]

  """All values less than the given value."""
  profilePic_lt: String

  """All values less than or equal the given value."""
  profilePic_lte: String

  """All values greater than the given value."""
  profilePic_gt: String

  """All values greater than or equal the given value."""
  profilePic_gte: String

  """All values containing the given string."""
  profilePic_contains: String

  """All values not containing the given string."""
  profilePic_not_contains: String

  """All values starting with the given string."""
  profilePic_starts_with: String

  """All values not starting with the given string."""
  profilePic_not_starts_with: String

  """All values ending with the given string."""
  profilePic_ends_with: String

  """All values not ending with the given string."""
  profilePic_not_ends_with: String
  gender: String

  """All values that are not equal to given value."""
  gender_not: String

  """All values that are contained in given list."""
  gender_in: [String!]

  """All values that are not contained in given list."""
  gender_not_in: [String!]

  """All values less than the given value."""
  gender_lt: String

  """All values less than or equal the given value."""
  gender_lte: String

  """All values greater than the given value."""
  gender_gt: String

  """All values greater than or equal the given value."""
  gender_gte: String

  """All values containing the given string."""
  gender_contains: String

  """All values not containing the given string."""
  gender_not_contains: String

  """All values starting with the given string."""
  gender_starts_with: String

  """All values not starting with the given string."""
  gender_not_starts_with: String

  """All values ending with the given string."""
  gender_ends_with: String

  """All values not ending with the given string."""
  gender_not_ends_with: String
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  position: String

  """All values that are not equal to given value."""
  position_not: String

  """All values that are contained in given list."""
  position_in: [String!]

  """All values that are not contained in given list."""
  position_not_in: [String!]

  """All values less than the given value."""
  position_lt: String

  """All values less than or equal the given value."""
  position_lte: String

  """All values greater than the given value."""
  position_gt: String

  """All values greater than or equal the given value."""
  position_gte: String

  """All values containing the given string."""
  position_contains: String

  """All values not containing the given string."""
  position_not_contains: String

  """All values starting with the given string."""
  position_starts_with: String

  """All values not starting with the given string."""
  position_not_starts_with: String

  """All values ending with the given string."""
  position_ends_with: String

  """All values not ending with the given string."""
  position_not_ends_with: String
  trial: Boolean

  """All values that are not equal to given value."""
  trial_not: Boolean
  cognitoId: String

  """All values that are not equal to given value."""
  cognitoId_not: String

  """All values that are contained in given list."""
  cognitoId_in: [String!]

  """All values that are not contained in given list."""
  cognitoId_not_in: [String!]

  """All values less than the given value."""
  cognitoId_lt: String

  """All values less than or equal the given value."""
  cognitoId_lte: String

  """All values greater than the given value."""
  cognitoId_gt: String

  """All values greater than or equal the given value."""
  cognitoId_gte: String

  """All values containing the given string."""
  cognitoId_contains: String

  """All values not containing the given string."""
  cognitoId_not_contains: String

  """All values starting with the given string."""
  cognitoId_starts_with: String

  """All values not starting with the given string."""
  cognitoId_not_starts_with: String

  """All values ending with the given string."""
  cognitoId_ends_with: String

  """All values not ending with the given string."""
  cognitoId_not_ends_with: String
}

input UserWhereUniqueInput {
  id: ID
  email: String
  cognitoId: String
}
`

const Prisma = makePrismaBindingClass({ typeDefs })
module.exports = { Prisma }
