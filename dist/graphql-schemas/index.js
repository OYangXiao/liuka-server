"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const date = __importStar(require("./date"));
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
const typeDefs = [
    date.schemaString,
    `
        type Query { books: [Book] }
        type Book { title: String, author: String }
    `
];
const resolvers = [
    date.resolver,
    {
        Query: { books: () => books }
    }
];
exports.schema = graphql_tools_1.makeExecutableSchema({
    typeDefs,
    resolvers,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ3JhcGhxbC1zY2hlbWFzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGlEQUFvRDtBQUVwRCw2Q0FBOEI7QUFFOUIsTUFBTSxLQUFLLEdBQUc7SUFDVjtRQUNJLEtBQUssRUFBRSx1Q0FBdUM7UUFDOUMsTUFBTSxFQUFFLGNBQWM7S0FDekI7SUFDRDtRQUNJLEtBQUssRUFBRSxlQUFlO1FBQ3RCLE1BQU0sRUFBRSxrQkFBa0I7S0FDN0I7Q0FDSixDQUFDO0FBR0YsTUFBTSxRQUFRLEdBQUc7SUFDYixJQUFJLENBQUMsWUFBWTtJQUNqQjs7O0tBR0M7Q0FDSixDQUFDO0FBR0YsTUFBTSxTQUFTLEdBQUc7SUFDZCxJQUFJLENBQUMsUUFBUTtJQUNiO1FBQ0ksS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRTtLQUNoQztDQUNKLENBQUE7QUFHWSxRQUFBLE1BQU0sR0FBRyxvQ0FBb0IsQ0FBQztJQUN2QyxRQUFRO0lBQ1IsU0FBUztDQUNaLENBQUMsQ0FBQyJ9