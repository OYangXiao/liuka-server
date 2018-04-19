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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1kZWZzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NjaGVtYXMvdXNlci90eXBlLWRlZnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLFFBQVEsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXlCdkIsQ0FBQyJ9