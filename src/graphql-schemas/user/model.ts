import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import bcrypt from 'bcrypt-nodejs';

const userSchema = new Schema({
	uid: { type: Number, index: true /*, unique: true, sparse:true*/ },
	password: { type: String, required: true },
	wechat: {
		id: { type: String, index: true },
		token: String,
		name: String,
		pic: String
	},
	qq: {
		id: { type: String, index: true },
		token: String,
		name: String,
		pic: String
	},
	weibo: {
		id: { type: String, index: true },
		token: String,
		name: String,
		pic: String
	},
	facebook: {
		id: { type: String, index: true },
		token: String,
		name: String,
		pic: String,
		email: String
	},
	email: { type: String, index: true },
	phone: { type: String, index: true },

	unm: String,
	pic: String,
	sig: String,

	test: { type: Number, min: 10 },

	regTime: Date
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

export const UserModel = mongoose.model('User', userSchema);
