import { Middleware } from 'koa';

export const errMsgs: Middleware = function(ctx, next) {
	return next().catch((err) => {
		switch (err.status) {
			case 401:
				ctx.status = 401;
				ctx.body = 'not allowed'; // 401 error, for no authority access
				break;
			case 404:
				ctx.status = 404;
				ctx.body = 'not found';
				break;
			default:
				throw err;
		}
	});
};
