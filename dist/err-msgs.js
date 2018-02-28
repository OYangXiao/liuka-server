"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errMsgs = function (ctx, next) {
    return next().catch((err) => {
        switch (err.status) {
            case 401:
                ctx.status = 401;
                ctx.body = 'not allowed';
                break;
            case 404:
                ctx.status = 404;
                ctx.body = 'not found';
            default:
                throw err;
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyLW1zZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZXJyLW1zZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFYSxRQUFBLE9BQU8sR0FBZSxVQUFVLEdBQUcsRUFBRSxJQUFJO0lBQ2xELE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUN4QixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqQixLQUFLLEdBQUc7Z0JBQ0osR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQ2pCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFBO2dCQUN4QixLQUFLLENBQUE7WUFDVCxLQUFLLEdBQUc7Z0JBQ0osR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQ2pCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFBO1lBQzFCO2dCQUNJLE1BQU0sR0FBRyxDQUFDO1FBQ2xCLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQSJ9