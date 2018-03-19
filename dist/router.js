"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const koa_router_1 = tslib_1.__importDefault(require("koa-router"));
const koa_bodyparser_1 = tslib_1.__importDefault(require("koa-bodyparser"));
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const apollo_server_koa_1 = require("apollo-server-koa");
const graphql_schemas_1 = require("./graphql-schemas");
exports.router = new koa_router_1.default();
exports.router.get('/graphql', apollo_server_koa_1.graphqlKoa({ schema: graphql_schemas_1.schema }));
exports.router.post('/graphql', koa_bodyparser_1.default({ enableTypes: ['json'] }), apollo_server_koa_1.graphqlKoa({ schema: graphql_schemas_1.schema }));
exports.router.get('/graphiql', apollo_server_koa_1.graphiqlKoa({ endpointURL: '/graphql' }));
const file = fs_1.default.createReadStream(path_1.default.join(__dirname, './public/index.html'));
exports.router.get('/', (ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    ctx.type = 'html';
    ctx.body = file;
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxvRUFBZ0M7QUFDaEMsNEVBQXVDO0FBQ3ZDLG9EQUFtQjtBQUNuQix3REFBdUI7QUFDdkIseURBQTJEO0FBRTNELHVEQUEwQztBQUU3QixRQUFBLE1BQU0sR0FBRyxJQUFJLG9CQUFNLEVBQUUsQ0FBQztBQUVuQyxjQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSw4QkFBVSxDQUFDLEVBQUUsTUFBTSxFQUFFLHdCQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFFdEQsY0FBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsd0JBQVUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSw4QkFBVSxDQUFDLEVBQUUsTUFBTSxFQUFFLHdCQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFFOUYsY0FBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsK0JBQVcsQ0FBQyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFHbEUsTUFBTSxJQUFJLEdBQUcsWUFBRSxDQUFDLGdCQUFnQixDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLHFCQUFxQixDQUFDLENBQUMsQ0FBQTtBQUM3RSxjQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFPLEdBQUcsRUFBRSxFQUFFO0lBQzFCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0lBRWxCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0FBQ25CLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==