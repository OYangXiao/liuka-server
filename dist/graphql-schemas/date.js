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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsLXNjaGVtYXMvZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUE0QztBQUM1QywrQ0FBdUM7QUFFMUIsUUFBQSxZQUFZLEdBQUc7O0NBRTNCLENBQUE7QUFFWSxRQUFBLFFBQVEsR0FBRztJQUNwQixJQUFJLEVBQUUsSUFBSSwyQkFBaUIsQ0FBQztRQUN4QixJQUFJLEVBQUUsTUFBTTtRQUNaLFdBQVcsRUFBRSx5REFBeUQ7UUFDdEUsVUFBVSxDQUFDLEtBQUs7WUFDWixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUNELFNBQVMsQ0FBQyxLQUFLO1lBQ1gsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixDQUFDO1FBQ0QsWUFBWSxDQUFDLEdBQUc7WUFDWixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLGVBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztLQUNKLENBQUM7Q0FDTCxDQUFDIn0=