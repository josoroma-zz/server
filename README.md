# Server

yarn add <package...> [--dev/-D]

## Dependencies

```
yarn add cors body-parser express graphql graphql-server-express graphql-tools
```

## Dev Dependencies

```
yarn add babel-cli babel-preset-es2015 babel-preset-stage-0 nodemon -D
```

## Start Server

```
yarn start
```

## GraphiQL

```
chrome http://localhost:4000/graphiql

{
  menus {
    id
    name
    route
  }
}
```

## Modularizing the schema

 * http://dev.apollodata.com/tools/graphql-tools/generate-schema.html#modularizing

 * https://github.com/okgrow/merge-graphql-schemas
