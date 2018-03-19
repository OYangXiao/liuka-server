import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLDateTime } from 'graphql-iso-date';

import * as user from './user';

// The GraphQL schema in string form
const typeDefs = [ `scalar DateTime`, user.typeDefs ];

// The resolvers
const resolvers = [
	{
		DateTime: GraphQLDateTime
	},
	user.resolvers
];

// Put together a schema
export const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});
