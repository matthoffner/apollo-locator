module.exports = {
    frontend: {
        resolvers: {
            regex: /^server\/resolvers\/([A-z0-9_\-]+)(\.([\w_\-]+))?\.js$/i
        },
        typeDefs: {
            regex: /^server\/typeDefs\/([A-z0-9_\-]+)(\.([\w_\-]+))?\.graphql$/i
        }
    },
    module: {
        resolvers: {
            regex: /^module\/resolvers\/([A-z0-9_\-]+)(\.([\w_\-]+))?\.js$/i
        },
        typeDefs: {
            regex: /^module\/typeDefs\/([A-z0-9_\-]+)(\.([\w_\-]+))?\.graphql$/i
        }
    }
};
