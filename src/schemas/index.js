import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import {resolvers} from '../resolvers/';

export const typeDefs = `
  type Menu {
    id: ID!
    name: String!
    route: String!
  }

  type Query {
    menus: [Menu]
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
