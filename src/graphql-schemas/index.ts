import { makeExecutableSchema } from 'graphql-tools'

import * as date from './date'
// Some fake data
const books = [
    {
        title: "Harry Potter and the Sorcerer's stone",
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];

// The GraphQL schema in string form
const typeDefs = [
    date.schemaString,
    `
        type Query { books: [Book] }
        type Book { title: String, author: String }
    `
];

// The resolvers
const resolvers = [
    date.resolver,
    {
        Query: { books: () => books }
    }
]

// Put together a schema
export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});