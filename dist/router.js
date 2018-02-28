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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const apollo_server_koa_1 = require("apollo-server-koa");
const graphql_tools_1 = require("graphql-tools");
exports.router = new koa_router_1.default();
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
const typeDefs = `
    type Query { books: [Book] }
    type Book { title: String, author: String }
  `;
const resolvers = {
    Query: { books: () => books },
};
const schema = graphql_tools_1.makeExecutableSchema({
    typeDefs,
    resolvers,
});
exports.router.get('/graphql', apollo_server_koa_1.graphqlKoa({ schema: schema }));
exports.router.post('/graphql', apollo_server_koa_1.graphqlKoa({ schema: schema }));
const file = fs_1.default.createReadStream(path_1.default.join(__dirname, './public/index.html'));
exports.router.get('/', (ctx) => __awaiter(this, void 0, void 0, function* () {
    ctx.type = 'html';
    ctx.body = file;
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsNERBQWdDO0FBQ2hDLDRDQUFtQjtBQUNuQixnREFBdUI7QUFDdkIseURBQThDO0FBQzlDLGlEQUFvRDtBQUV2QyxRQUFBLE1BQU0sR0FBRyxJQUFJLG9CQUFNLEVBQUUsQ0FBQztBQUduQyxNQUFNLEtBQUssR0FBRztJQUNWO1FBQ0ksS0FBSyxFQUFFLHVDQUF1QztRQUM5QyxNQUFNLEVBQUUsY0FBYztLQUN6QjtJQUNEO1FBQ0ksS0FBSyxFQUFFLGVBQWU7UUFDdEIsTUFBTSxFQUFFLGtCQUFrQjtLQUM3QjtDQUNKLENBQUM7QUFHRixNQUFNLFFBQVEsR0FBRzs7O0dBR2QsQ0FBQztBQUdKLE1BQU0sU0FBUyxHQUFHO0lBQ2QsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRTtDQUNoQyxDQUFDO0FBR0YsTUFBTSxNQUFNLEdBQUcsb0NBQW9CLENBQUM7SUFDaEMsUUFBUTtJQUNSLFNBQVM7Q0FDWixDQUFDLENBQUM7QUFFSCxjQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSw4QkFBVSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUN0RCxjQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSw4QkFBVSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUl2RCxNQUFNLElBQUksR0FBRyxZQUFFLENBQUMsZ0JBQWdCLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxDQUFBO0FBQzdFLGNBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQU8sR0FBRyxFQUFFLEVBQUU7SUFDMUIsR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7SUFFbEIsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7QUFDbkIsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9