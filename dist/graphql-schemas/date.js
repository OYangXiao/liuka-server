"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const language_1 = require("graphql/language");
exports.schemaString = `
    scalar Date
`;
exports.resolver = {
    Date: new graphql_1.GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type, milliseconds of unix timestamp',
        parseValue(value) {
            if (value instanceof Date) {
                return value.getTime();
            }
            else {
                return value;
            }
        },
        serialize(value) {
            return value;
        },
        parseLiteral(ast) {
            if (ast.kind === language_1.Kind.INT) {
                return parseInt(ast.value, 10);
            }
            return null;
        }
    })
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsLXNjaGVtYXMvZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUE0QztBQUM1QywrQ0FBd0M7QUFFM0IsUUFBQSxZQUFZLEdBQUc7O0NBRTNCLENBQUM7QUFFVyxRQUFBLFFBQVEsR0FBRztJQUN2QixJQUFJLEVBQUUsSUFBSSwyQkFBaUIsQ0FBQztRQUMzQixJQUFJLEVBQUUsTUFBTTtRQUNOLFdBQVcsRUFBRSx5REFBeUQ7UUFLNUUsVUFBVSxDQUFDLEtBQUs7WUFDZixFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDM0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0ssTUFBTSxDQUFDLEtBQUssQ0FBQTtZQUN6QixDQUFDO1FBQ0ksQ0FBQztRQUtQLFNBQVMsQ0FBQyxLQUFLO1lBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNkLENBQUM7UUFDRCxZQUFZLENBQUMsR0FBRztZQUNmLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssZUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNoQyxDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNiLENBQUM7S0FDRCxDQUFDO0NBQ0YsQ0FBQyJ9