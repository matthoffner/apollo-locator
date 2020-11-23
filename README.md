# apollo-locator

Uses [locator](https://www.npmjs.com/package/locator) to locate to gather type definitions and resolvers for Apollo.

This assumes that you are using scoped packages, and will use the scope definition for the package.json name.

```js
"name": "@myorg/frontend",
"locator": {
    "ruleset": "frontend",
    "rulesets": "ruleset"
},
```

create a ruleset for the pattern your type definitions and resolvers use:

```js
module.exports = {
  frontend: {
    resolvers: {
      regex: /^server\/resolvers\/([A-z0-9_\-]+)(\.([\w_\-]+))?\.js$/i,
    },
    typeDefs: {
      regex: /^server\/typeDefs\/([A-z0-9_\-]+)(\.([\w_\-]+))?\.graphql$/i,
    },
  },
  apollo: {
    resolvers: {
      regex: /^src\/resolvers\/([A-z0-9_\-]+)(\.([\w_\-]+))?\.js$/i,
    },
    typeDefs: {
      regex: /^src\/typeDefs\/([A-z0-9_\-]+)(\.([\w_\-]+))?\.graphql$/i,
    },
  },
};
```

Then you can use apollo-locator to automatically pull in your typeDefs and resolvers:

```js
import { typeDefs, resolvers } from "apollo-locator";

const apolloApiMiddleware = new ApolloServer({
  typeDefs,
  resolvers,
});
```
