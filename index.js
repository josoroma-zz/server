import express from 'express';
import cors from 'cors';

import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';

import bodyParser from 'body-parser';

import { schema } from './src/schemas/';

const CLIENT_PORT = 3000;
const GRAPHQL_PORT = 4000;

const graphQLServer = express();

graphQLServer.use(
  '*',
  cors({
    origin: `http://localhost:${CLIENT_PORT}`
  })
);

graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

graphQLServer.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `CORS-enabled GraphiQL running on http://localhost:${GRAPHQL_PORT}/graphiql`
));
