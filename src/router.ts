import Router from 'koa-router';
import fs from 'fs'
import path from 'path'
import { graphqlKoa } from 'apollo-server-koa'
import { makeExecutableSchema } from 'graphql-tools'

export const router = new Router();

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
const typeDefs = `
    type Query { books: [Book] }
    type Book { title: String, author: String }
  `;

// The resolvers
const resolvers = {
    Query: { books: () => books },
};

// Put together a schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

router.get('/graphql', graphqlKoa({ schema: schema }))
router.post('/graphql', graphqlKoa({ schema: schema }))


//最后一个路由，如果之前都未命中，则返回index.html
const file = fs.createReadStream(path.join(__dirname, './public/index.html'))
router.get('/', async (ctx) => {
    ctx.type = 'html';
    // if file not found, an error with status 404 will be thrown
    ctx.body = file
});
