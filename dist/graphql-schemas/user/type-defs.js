"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = `
    type User {
		id: ID!
		password: String
		phone: String
		email: String

        unm: String
        pic: String
        sig: String

        test: Int
		regTime: DateTime
    }

    type Query {
        user: User
    }

    type Mutation {
        phoneEmailFirstInit (
            phone: String
            email: String
        ): User
    }
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1kZWZzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dyYXBocWwtc2NoZW1hcy91c2VyL3R5cGUtZGVmcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsUUFBUSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBeUJ2QixDQUFDIn0=