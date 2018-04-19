export const typeDefs = `
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


