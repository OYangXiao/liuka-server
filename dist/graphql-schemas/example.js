"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
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
exports.schema = graphql_tools_1.makeExecutableSchema({
    typeDefs,
    resolvers,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsLXNjaGVtYXMvZXhhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFvRDtBQUdwRCxNQUFNLEtBQUssR0FBRztJQUNWO1FBQ0ksS0FBSyxFQUFFLHVDQUF1QztRQUM5QyxNQUFNLEVBQUUsY0FBYztLQUN6QjtJQUNEO1FBQ0ksS0FBSyxFQUFFLGVBQWU7UUFDdEIsTUFBTSxFQUFFLGtCQUFrQjtLQUM3QjtDQUNKLENBQUM7QUFHRixNQUFNLFFBQVEsR0FBRzs7O0dBR2QsQ0FBQztBQUdKLE1BQU0sU0FBUyxHQUFHO0lBQ2QsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRTtDQUNoQyxDQUFDO0FBR1csUUFBQSxNQUFNLEdBQUcsb0NBQW9CLENBQUM7SUFDdkMsUUFBUTtJQUNSLFNBQVM7Q0FDWixDQUFDLENBQUMifQ==