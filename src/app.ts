/*!
 * koa-todo - app.js
 * Copyright(c) 2014 dead_horse <dead_horse@qq.com>
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

import Koa from 'koa'
import path from 'path';
import http from 'http';

import Router from 'koa-router'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import jwt from 'koa-jwt'

import { config } from './config'
// import { routes } from './routes'
const app = new Koa()

app.use(logger())
app.use(bodyParser({
    enableTypes:['json']
}))
// Custom 401 handling if you don't want to expose koa-jwt errors to users
app.use(function(ctx, next){
  return next().catch((err) => {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = //'Protected resource, use Authorization header to get access\n';
    } else {
      throw err;
    }
  });
});
// app.use(routes)
// Protected middleware
app.use(function(ctx){
    if (ctx.url.match(/^\/api/)) {
      ctx.body = 'protected\n';
    }
  });

// app = module.exports = http.createServer(app.callback());

app.listen(config.port);
console.log('$ open http://127.0.0.1: ' + config.port);