"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const apollo_server_koa_1 = require("apollo-server-koa");
const graphql_schemas_1 = require("./graphql-schemas");
exports.router = new koa_router_1.default();
exports.router.get('/graphql', apollo_server_koa_1.graphqlKoa({ schema: graphql_schemas_1.schema }));
exports.router.post('/graphql', koa_bodyparser_1.default({ enableTypes: ['json'] }), apollo_server_koa_1.graphqlKoa({ schema: graphql_schemas_1.schema }));
exports.router.get('/graphiql', apollo_server_koa_1.graphiqlKoa({ endpointURL: '/graphql' }));
const file = fs_1.default.createReadStream(path_1.default.join(__dirname, './public/index.html'));
exports.router.get('/', (ctx) => __awaiter(this, void 0, void 0, function* () {
    ctx.type = 'html';
    ctx.body = file;
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsNERBQWdDO0FBQ2hDLG9FQUF1QztBQUN2Qyw0Q0FBbUI7QUFDbkIsZ0RBQXVCO0FBQ3ZCLHlEQUEyRDtBQUUzRCx1REFBMEM7QUFFN0IsUUFBQSxNQUFNLEdBQUcsSUFBSSxvQkFBTSxFQUFFLENBQUM7QUFFbkMsY0FBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsOEJBQVUsQ0FBQyxFQUFFLE1BQU0sRUFBRSx3QkFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBRXRELGNBQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLHdCQUFVLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsOEJBQVUsQ0FBQyxFQUFFLE1BQU0sRUFBRSx3QkFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBRTlGLGNBQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLCtCQUFXLENBQUMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBR2xFLE1BQU0sSUFBSSxHQUFHLFlBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLENBQUE7QUFDN0UsY0FBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBTyxHQUFHLEVBQUUsRUFBRTtJQUMxQixHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUVsQixHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtBQUNuQixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=