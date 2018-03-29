import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//用户的相关数据
const profileSchema = new Schema({
	uid: { type: Number, index: true /*, unique: true, sparse:true*/ },
	settings: {
		country: String,
		province: String,
		city: String,

		school: String,
		education: String, //学历
		profession: String,

		industry: String,
		org: String,
		job: String,

		intro: String,

		contact: String
	},

	//用户关注相关数据
	note: {
		savedUserCount: { type: Number, default: 0 },
		savedCaseCount: { type: Number, default: 0 },
		savedTagCount: { type: Number, default: 0 },
		saveMeCount: { type: Number, default: 0 },
		likeMeCount: { type: Number, default: 0 }
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

mongoose.model('Profile', profileSchema);