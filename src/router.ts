import Router from 'koa-router';
import bodyParser from 'koa-bodyparser'
import fs from 'fs'
import path from 'path'
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa'

import { schema } from './schemas'

export const router = new Router();

router.get('/graphql', graphqlKoa({ schema: schema }))

router.post('/graphql', bodyParser({ enableTypes: ['json'] }), graphqlKoa({ schema: schema }))

router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

//最后一个路由，如果之前都未命中，则返回index.html
const file = fs.createReadStream(path.join(__dirname, './public/index.html'))
router.get('/', async (ctx) => {
    ctx.type = 'html';
    // if file not found, an error with status 404 will be thrown
    ctx.body = file
});
