import { tUser } from './type-defs';

let users: tUser[] = [
	{
		_id: 'awefawefeaweg',
		id: 1,
		phone: '123328473272',
		unm: 'oyx',
		pic: 'awefij',
		sig: 'wefejaweoifij'
	}
];

export const resolvers = {
	Query: {
		user: (_: any, { id }: resolverParams) => users.find((user) => user.id === id)
	},
	Mutation: {
		// 用于用户初次尝试注册帐号，必须要提供一个手机号或者email
		phoneEmailFirstInit: (_: any, { phone }: resolverParams) => {
			const newuser: tUser = {
				_id: (Math.random() * 10000000).toFixed(0).toString(),
				id: 2,
				phone: phone,
				unm: 'any',
				pic: 'w9ef',
				sig: 'w8efwef8',
				regTime: Date.now()
			};
			users.push(newuser);
			return users[users.length - 1];
		}
	}
};
