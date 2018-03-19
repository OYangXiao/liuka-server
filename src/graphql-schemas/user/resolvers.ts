import { UserModel } from './model';

export const resolvers = {
	Query: {
		user: async () => await UserModel.findOne()
	},
	Mutation: {
		// 用于用户初次尝试注册帐号，必须要提供一个手机号或者email
		phoneEmailFirstInit: async (_: any, { phone, email }: resolverParams) => {
			try {
				return await new UserModel({
					phone: phone,
					email: email,
					unm: 'any',
					pic: 'w9ef',
					sig: 'w8efwef8',
					test: 3,
					regTime: new Date()
				}).save();
			} catch (err) {
				return err;
			}
		}
	}
};
