export const typeDefs = `
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
`