import { makeExecutableSchema } from 'graphql-tools'

import * as user from './user'

// The GraphQL schema in string form
const typeDefs = [
    user.typeDefs
];

// The resolvers
const resolvers = [
    user.resolvers
]

// Put together a schema
export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});