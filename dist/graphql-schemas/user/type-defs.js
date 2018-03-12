"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = `
    type User {
        _id: ID!
        id: Int!
        phone: String!

        unm: String
        pic: String
        sig: string
    }

    type Query {
        user(id: Int!): User
    }

    type Mutation {
        create (
            phone: String!
        ): User
    }
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1kZWZzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dyYXBocWwtc2NoZW1hcy91c2VyL3R5cGUtZGVmcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsUUFBUSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW9CdkIsQ0FBQSJ9