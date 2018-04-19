"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_tools_1 = require("graphql-tools");
const graphql_iso_date_1 = require("graphql-iso-date");
const user = tslib_1.__importStar(require("./user"));
const typeDefs = [`scalar DateTime`, user.typeDefs];
const resolvers = [
    {
        DateTime: graphql_iso_date_1.GraphQLDateTime
    },
    user.resolvers
];
exports.schema = graphql_tools_1.makeExecutableSchema({
    typeDefs,
    resolvers
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2NoZW1hcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBcUQ7QUFDckQsdURBQW1EO0FBRW5ELHFEQUErQjtBQUcvQixNQUFNLFFBQVEsR0FBRyxDQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUUsQ0FBQztBQUd0RCxNQUFNLFNBQVMsR0FBRztJQUNqQjtRQUNDLFFBQVEsRUFBRSxrQ0FBZTtLQUN6QjtJQUNELElBQUksQ0FBQyxTQUFTO0NBQ2QsQ0FBQztBQUdXLFFBQUEsTUFBTSxHQUFHLG9DQUFvQixDQUFDO0lBQzFDLFFBQVE7SUFDUixTQUFTO0NBQ1QsQ0FBQyxDQUFDIn0=