export const typeDefs = `
    type User {
        _id: ID!
        id: Int!
        phone: String!

        unm: String
        pic: String
        sig: String

        regTime: Date
    }

    type Query {
        user(id: Int!): User
    }

    type Mutation {
        createUser (
            phone: String!
        ): User
    }
`;

export type tUser = {
	_id: string;
	id: number;
	phone: string;
	unm: string;
	pic: string;
	sig: string;
	regTime?: any;
};
