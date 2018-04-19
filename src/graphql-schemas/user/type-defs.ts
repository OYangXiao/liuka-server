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
        user(): User
    }

    type Mutation {
        createUser (
            phone: String
            email: String
        ): User
    }
`;

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import bcrypt from 'bcrypt-nodejs';

const OAuthInfo = {
	id: { type: String, index: true },
	token: String,
	name: String,
	pic: String
};
const userSchema = new Schema({
	//首先支持4种账号登陆
	wechat: OAuthInfo,
	qq: OAuthInfo,
	weibo: OAuthInfo,
	facebook: OAuthInfo,
	
	disabled: Boolean, //用户是否已被封号
	unm: String,
	pic: String,
	sig: String,

	regTime: Number,
	//系统向用户发消息的通道名
	pipe: String,

	//是否参与内测
	tester: Boolean,

	//用户关注相关数据
	followSummary: {
		followingCount: {
			user: { type: Number, default: 0 },
			case: { type: Number, default: 0 },
			tag: { type: Number, default: 0 }
		},

		followedCount: { type: Number, default: 0 },
		likedCount: { type: Number, default: 0 }
	}
	// ! 用户被另一个用户邀请了的记录
	// invitedBy: {
	// 	user: { type: Schema.Types.ObjectId, ref: 'User' },
	// 	activity: String
	// },

	// ! 所有可以被别人搜索到这个人的内容，多个手机，多个邮箱, 名字等
	// searches: [{
	//     _id: false,
	//     name: { type: String, enum: ['phone', 'email', 'unm'], index: true },
	//     content: { type: String, index: true }
	// }],
	// ! 用户的收入
	// income: {
	// 	history: { type: Number, default: 0 },
	// 	now: { type: Number, default: 0 },
	// 	wait: { type: Number, default: 0 },
	// 	count: { type: Number, default: 0 }
	// },
	// ! 用户的申请计划
	// plan: {
	// 	list: [
	// 		{
	// 			_id: false,
	// 			id: String,
	// 			level: { type: String, enum: [ 'e', 'n', 'h' ] }
	// 		}
	// 	],
	// 	likes: [ String ],
	// 	filter: {
	// 		level: [ String ],
	// 		isp: [ String ],
	// 		money: [ String ],
	// 		district: [ String ],
	// 		csize: [ String ], //city size
	// 		ssize: [ String ], //school size, according to school student count
	// 		major1: [ String ],
	// 		major2: [ String ]
	// 	}
	// },
});

userSchema.pre('save', function(this: any, next) {
	const user = this;
	if (!user.isModified('password')) return next();

	bcrypt.genSalt(10, function(err, salt) {
		if (err) return next(err);

		// hash the password using our new salt
		bcrypt.hash(user.password, salt, function(err: Error, hash: string) {
			if (err) return next(err);

			// override the cleartext password with the hashed one
			user.password = hash;
			next();
		});
	});
});
userSchema.methods.comparePassword = function(password: string, cb: (error: Error | null, result?: boolean) => any) {
	bcrypt.compare(password, this.password, function(err, isMatch) {
		if (err) return cb(err);
		cb(null, isMatch);
	});
};
mongoose.model('User', userSchema);
