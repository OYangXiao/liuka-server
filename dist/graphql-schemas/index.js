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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ3JhcGhxbC1zY2hlbWFzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlEQUFxRDtBQUNyRCx1REFBbUQ7QUFFbkQscURBQStCO0FBRy9CLE1BQU0sUUFBUSxHQUFHLENBQUUsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBRSxDQUFDO0FBR3RELE1BQU0sU0FBUyxHQUFHO0lBQ2pCO1FBQ0MsUUFBUSxFQUFFLGtDQUFlO0tBQ3pCO0lBQ0QsSUFBSSxDQUFDLFNBQVM7Q0FDZCxDQUFDO0FBR1csUUFBQSxNQUFNLEdBQUcsb0NBQW9CLENBQUM7SUFDMUMsUUFBUTtJQUNSLFNBQVM7Q0FDVCxDQUFDLENBQUMifQ==