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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsL2V4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBb0Q7QUFHcEQsTUFBTSxLQUFLLEdBQUc7SUFDVjtRQUNJLEtBQUssRUFBRSx1Q0FBdUM7UUFDOUMsTUFBTSxFQUFFLGNBQWM7S0FDekI7SUFDRDtRQUNJLEtBQUssRUFBRSxlQUFlO1FBQ3RCLE1BQU0sRUFBRSxrQkFBa0I7S0FDN0I7Q0FDSixDQUFDO0FBR0YsTUFBTSxRQUFRLEdBQUc7OztHQUdkLENBQUM7QUFHSixNQUFNLFNBQVMsR0FBRztJQUNkLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUU7Q0FDaEMsQ0FBQztBQUdXLFFBQUEsTUFBTSxHQUFHLG9DQUFvQixDQUFDO0lBQ3ZDLFFBQVE7SUFDUixTQUFTO0NBQ1osQ0FBQyxDQUFDIn0=