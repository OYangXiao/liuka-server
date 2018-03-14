import { makeExecutableSchema } from 'graphql-tools'

import * as date from './date'
import * as user from './user'

// The GraphQL schema in string form
const typeDefs = [
    date.schemaString,
    user.typeDefs
];

// The resolvers
const resolvers = [
    date.resolver,
    user.resolvers
]

// Put together a schema
export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});