import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export const schemaString = `
    scalar Date
`;

export const resolver = {
	Date: new GraphQLScalarType({
		name: 'Date',
        description: 'Date custom scalar type, milliseconds of unix timestamp',
        /**
         * 将用户传来的时间保存为unix时间戳
         * @param value 需要保存的时间
         */
		parseValue(value) {
			if (value instanceof Date) {
				return value.getTime();
			} else {
                return value
			}
        },
        /**
         * 取出时间戳给用户
         * @param value 保存在数据库中的时间戳
         */
		serialize(value) {
			return value;
		},
		parseLiteral(ast) {
			if (ast.kind === Kind.INT) {
				return parseInt(ast.value, 10); // ast value is always in string format
			}
			return null;
		}
	})
};
