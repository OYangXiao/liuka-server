"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const language_1 = require("graphql/language");
exports.schema = `
    scalar Date
`;
exports.resolver = {
    Date: new graphql_1.GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type, milliseconds of unix timestamp',
        parseValue(value) {
            return new Date(value);
        },
        serialize(value) {
            return value.getTime();
        },
        parseLiteral(ast) {
            if (ast.kind === language_1.Kind.INT) {
                return parseInt(ast.value, 10);
            }
            return null;
        },
    })
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1zY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ3JhcGhxbC1zY2hlbWFzL2RhdGUtc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQTRDO0FBQzVDLCtDQUF1QztBQUUxQixRQUFBLE1BQU0sR0FBRzs7Q0FFckIsQ0FBQTtBQUVZLFFBQUEsUUFBUSxHQUFHO0lBQ3BCLElBQUksRUFBRSxJQUFJLDJCQUFpQixDQUFDO1FBQ3hCLElBQUksRUFBRSxNQUFNO1FBQ1osV0FBVyxFQUFFLHlEQUF5RDtRQUN0RSxVQUFVLENBQUMsS0FBSztZQUNaLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBQ0QsU0FBUyxDQUFDLEtBQUs7WUFDWCxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNCLENBQUM7UUFDRCxZQUFZLENBQUMsR0FBRztZQUNaLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssZUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNuQyxDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO0tBQ0osQ0FBQztDQUNMLENBQUMifQ==