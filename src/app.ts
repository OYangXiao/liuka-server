'use strict';

/**
 * Module dependencies.
 */

import Koa from 'koa'
import path from 'path';
import http from 'http';

import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'

import * as config from './config'
import { router } from './router'
import { errMsgs } from './err-msgs'

const app = module.exports = new Koa()

//use system middlewares
app.use(logger())
app.use(bodyParser({
    enableTypes: ['json']
}))
app.use(errMsgs);

//use routes
app.use(router.routes())
app.use(router.allowedMethods())


if (!module.parent) app.listen(config.port);
console.log('$ open http://127.0.0.1: ' + config.port);