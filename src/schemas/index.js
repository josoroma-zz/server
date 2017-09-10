import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import {resolvers} from '../resolvers/';

// Modularizing the schema:
// http://dev.apollodata.com/tools/graphql-tools/generate-schema.html#modularizing
// https://github.com/okgrow/merge-graphql-schemas

export const typeDefs = `
  type Menu {
    id: ID!
    path: String!
    component: String!
  }

  type User {
    id: ID!
    username: String!
    roles: [String]
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String!
    user: User
  }

  type Query {
    menus(limit: Int, offset: Int, sort: String): [Menu],

    users(limit: Int, offset: Int, sort: String): [User],
    user(id: ID!): User,

    posts(limit: Int, offset: Int, sort: String): [Post],
    post(id: ID!): Post
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export {schema};
