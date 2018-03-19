import mongoose from 'mongoose';
const UserModel = mongoose.model('User');

export const resolvers = {
	Query: {
		user: async () => {
			const user = await UserModel.find().limit(1);
			return user;
		}
	},
	Mutation: {
		// 用于用户初次尝试注册帐号，必须要提供一个手机号或者email
		phoneEmailFirstInit: (_: any, { phone, email }: resolverParams) => {
			const newuser = new UserModel({
				_id: (Math.random() * 10000000).toFixed(0).toString(),
				id: 2,
				phone: phone,
				email: email,
				unm: 'any',
				pic: 'w9ef',
				sig: 'w8efwef8',
				regTime: Date.now()
			});
			try {
				newuser.save();
			} catch (err) {
				return newuser;
			}
		}
	}
};
