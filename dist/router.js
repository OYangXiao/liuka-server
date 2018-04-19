"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const apollo_server_koa_1 = require("apollo-server-koa");
const schemas_1 = require("./schemas");
exports.router = new koa_router_1.default();
exports.router.get('/graphql', apollo_server_koa_1.graphqlKoa({ schema: schemas_1.schema }));
exports.router.post('/graphql', koa_bodyparser_1.default({ enableTypes: ['json'] }), apollo_server_koa_1.graphqlKoa({ schema: schemas_1.schema }));
exports.router.get('/graphiql', apollo_server_koa_1.graphiqlKoa({ endpointURL: '/graphql' }));
const file = fs_1.default.createReadStream(path_1.default.join(__dirname, './public/index.html'));
exports.router.get('/', async (ctx) => {
    ctx.type = 'html';
    ctx.body = file;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDREQUFnQztBQUNoQyxvRUFBdUM7QUFDdkMsNENBQW1CO0FBQ25CLGdEQUF1QjtBQUN2Qix5REFBMkQ7QUFFM0QsdUNBQWtDO0FBRXJCLFFBQUEsTUFBTSxHQUFHLElBQUksb0JBQU0sRUFBRSxDQUFDO0FBRW5DLGNBQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLDhCQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsZ0JBQU0sRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUV0RCxjQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSx3QkFBVSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLDhCQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsZ0JBQU0sRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUU5RixjQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSwrQkFBVyxDQUFDLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUdsRSxNQUFNLElBQUksR0FBRyxZQUFFLENBQUMsZ0JBQWdCLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxDQUFBO0FBQzdFLGNBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUMxQixHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUVsQixHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtBQUNuQixDQUFDLENBQUMsQ0FBQyJ9