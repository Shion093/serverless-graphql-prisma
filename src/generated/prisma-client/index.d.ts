// Code generated by Prisma (prisma@1.31.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "firstName_ASC"
  | "firstName_DESC"
  | "lastName_ASC"
  | "lastName_DESC"
  | "email_ASC"
  | "email_DESC"
  | "phoneNumber_ASC"
  | "phoneNumber_DESC"
  | "countryCode_ASC"
  | "countryCode_DESC"
  | "role_ASC"
  | "role_DESC"
  | "profilePic_ASC"
  | "profilePic_DESC"
  | "gender_ASC"
  | "gender_DESC"
  | "address_ASC"
  | "address_DESC"
  | "position_ASC"
  | "position_DESC"
  | "trial_ASC"
  | "trial_DESC"
  | "cognitoId_ASC"
  | "cognitoId_DESC";

export type Role = "GUEST" | "OWNER" | "ADMIN" | "USER" | "GODMODE";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserCreateInput {
  id?: ID_Input;
  firstName?: String;
  lastName?: String;
  email: String;
  phoneNumber?: String;
  countryCode?: Int;
  role?: Role;
  profilePic?: String;
  gender?: String;
  address?: String;
  position?: String;
  trial?: Boolean;
  cognitoId: String;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  firstName?: String;
  firstName_not?: String;
  firstName_in?: String[] | String;
  firstName_not_in?: String[] | String;
  firstName_lt?: String;
  firstName_lte?: String;
  firstName_gt?: String;
  firstName_gte?: String;
  firstName_contains?: String;
  firstName_not_contains?: String;
  firstName_starts_with?: String;
  firstName_not_starts_with?: String;
  firstName_ends_with?: String;
  firstName_not_ends_with?: String;
  lastName?: String;
  lastName_not?: String;
  lastName_in?: String[] | String;
  lastName_not_in?: String[] | String;
  lastName_lt?: String;
  lastName_lte?: String;
  lastName_gt?: String;
  lastName_gte?: String;
  lastName_contains?: String;
  lastName_not_contains?: String;
  lastName_starts_with?: String;
  lastName_not_starts_with?: String;
  lastName_ends_with?: String;
  lastName_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  phoneNumber?: String;
  phoneNumber_not?: String;
  phoneNumber_in?: String[] | String;
  phoneNumber_not_in?: String[] | String;
  phoneNumber_lt?: String;
  phoneNumber_lte?: String;
  phoneNumber_gt?: String;
  phoneNumber_gte?: String;
  phoneNumber_contains?: String;
  phoneNumber_not_contains?: String;
  phoneNumber_starts_with?: String;
  phoneNumber_not_starts_with?: String;
  phoneNumber_ends_with?: String;
  phoneNumber_not_ends_with?: String;
  countryCode?: Int;
  countryCode_not?: Int;
  countryCode_in?: Int[] | Int;
  countryCode_not_in?: Int[] | Int;
  countryCode_lt?: Int;
  countryCode_lte?: Int;
  countryCode_gt?: Int;
  countryCode_gte?: Int;
  role?: Role;
  role_not?: Role;
  role_in?: Role[] | Role;
  role_not_in?: Role[] | Role;
  profilePic?: String;
  profilePic_not?: String;
  profilePic_in?: String[] | String;
  profilePic_not_in?: String[] | String;
  profilePic_lt?: String;
  profilePic_lte?: String;
  profilePic_gt?: String;
  profilePic_gte?: String;
  profilePic_contains?: String;
  profilePic_not_contains?: String;
  profilePic_starts_with?: String;
  profilePic_not_starts_with?: String;
  profilePic_ends_with?: String;
  profilePic_not_ends_with?: String;
  gender?: String;
  gender_not?: String;
  gender_in?: String[] | String;
  gender_not_in?: String[] | String;
  gender_lt?: String;
  gender_lte?: String;
  gender_gt?: String;
  gender_gte?: String;
  gender_contains?: String;
  gender_not_contains?: String;
  gender_starts_with?: String;
  gender_not_starts_with?: String;
  gender_ends_with?: String;
  gender_not_ends_with?: String;
  address?: String;
  address_not?: String;
  address_in?: String[] | String;
  address_not_in?: String[] | String;
  address_lt?: String;
  address_lte?: String;
  address_gt?: String;
  address_gte?: String;
  address_contains?: String;
  address_not_contains?: String;
  address_starts_with?: String;
  address_not_starts_with?: String;
  address_ends_with?: String;
  address_not_ends_with?: String;
  position?: String;
  position_not?: String;
  position_in?: String[] | String;
  position_not_in?: String[] | String;
  position_lt?: String;
  position_lte?: String;
  position_gt?: String;
  position_gte?: String;
  position_contains?: String;
  position_not_contains?: String;
  position_starts_with?: String;
  position_not_starts_with?: String;
  position_ends_with?: String;
  position_not_ends_with?: String;
  trial?: Boolean;
  trial_not?: Boolean;
  cognitoId?: String;
  cognitoId_not?: String;
  cognitoId_in?: String[] | String;
  cognitoId_not_in?: String[] | String;
  cognitoId_lt?: String;
  cognitoId_lte?: String;
  cognitoId_gt?: String;
  cognitoId_gte?: String;
  cognitoId_contains?: String;
  cognitoId_not_contains?: String;
  cognitoId_starts_with?: String;
  cognitoId_not_starts_with?: String;
  cognitoId_ends_with?: String;
  cognitoId_not_ends_with?: String;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface UserUpdateInput {
  firstName?: String;
  lastName?: String;
  email?: String;
  phoneNumber?: String;
  countryCode?: Int;
  role?: Role;
  profilePic?: String;
  gender?: String;
  address?: String;
  position?: String;
  trial?: Boolean;
  cognitoId?: String;
}

export interface UserUpdateManyMutationInput {
  firstName?: String;
  lastName?: String;
  email?: String;
  phoneNumber?: String;
  countryCode?: Int;
  role?: Role;
  profilePic?: String;
  gender?: String;
  address?: String;
  position?: String;
  trial?: Boolean;
  cognitoId?: String;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
  cognitoId?: String;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  firstName?: String;
  lastName?: String;
  email: String;
  phoneNumber?: String;
  countryCode?: Int;
  role?: Role;
  profilePic?: String;
  gender?: String;
  address?: String;
  position?: String;
  trial?: Boolean;
  cognitoId: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  email: () => Promise<String>;
  phoneNumber: () => Promise<String>;
  countryCode: () => Promise<Int>;
  role: () => Promise<Role>;
  profilePic: () => Promise<String>;
  gender: () => Promise<String>;
  address: () => Promise<String>;
  position: () => Promise<String>;
  trial: () => Promise<Boolean>;
  cognitoId: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  phoneNumber: () => Promise<AsyncIterator<String>>;
  countryCode: () => Promise<AsyncIterator<Int>>;
  role: () => Promise<AsyncIterator<Role>>;
  profilePic: () => Promise<AsyncIterator<String>>;
  gender: () => Promise<AsyncIterator<String>>;
  address: () => Promise<AsyncIterator<String>>;
  position: () => Promise<AsyncIterator<String>>;
  trial: () => Promise<AsyncIterator<Boolean>>;
  cognitoId: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface User {
  id: ID_Output;
  firstName?: String;
  lastName?: String;
  email: String;
  phoneNumber?: String;
  countryCode?: Int;
  role?: Role;
  profilePic?: String;
  gender?: String;
  address?: String;
  position?: String;
  trial?: Boolean;
  cognitoId: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  email: () => Promise<String>;
  phoneNumber: () => Promise<String>;
  countryCode: () => Promise<Int>;
  role: () => Promise<Role>;
  profilePic: () => Promise<String>;
  gender: () => Promise<String>;
  address: () => Promise<String>;
  position: () => Promise<String>;
  trial: () => Promise<Boolean>;
  cognitoId: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  phoneNumber: () => Promise<AsyncIterator<String>>;
  countryCode: () => Promise<AsyncIterator<Int>>;
  role: () => Promise<AsyncIterator<Role>>;
  profilePic: () => Promise<AsyncIterator<String>>;
  gender: () => Promise<AsyncIterator<String>>;
  address: () => Promise<AsyncIterator<String>>;
  position: () => Promise<AsyncIterator<String>>;
  trial: () => Promise<AsyncIterator<Boolean>>;
  cognitoId: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Role",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
