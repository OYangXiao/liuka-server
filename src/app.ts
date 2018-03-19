'use strict';

/**
 * Module dependencies.
 */

import Koa from 'koa';
// import path from 'path';
// import http from 'http';

import logger from 'koa-logger';

import * as config from './config';
import { router } from './router';
import { errMsgs } from './err-msgs';

const app = (module.exports = new Koa());

//use system middlewares
app.use(logger());
app.use(errMsgs);

//use routes
app.use(router.routes());
app.use(router.allowedMethods());

import mongoose from 'mongoose';
import * as bluebird from 'bluebird';
mongoose.Promise = bluebird.Promise;
const dbUrl = 'mongodb://127.0.0.1/liuka_dev';
// Build the connection string
// Create the database connection
mongoose.connect(dbUrl);

mongoose.connection.on('connected', function() {
	console.log('Mongoose connected to ' + dbUrl);
});
mongoose.connection.on('error', function(err) {
	console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
	console.log('Mongoose disconnected');
});

if (!module.parent) app.listen(config.port);
console.log('$ open http://127.0.0.1: ' + config.port);
