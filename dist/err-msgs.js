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
                break;
            default:
                throw err;
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyLW1zZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZXJyLW1zZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFYSxRQUFBLE9BQU8sR0FBZSxVQUFTLEdBQUcsRUFBRSxJQUFJO0lBQ3BELE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUMzQixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwQixLQUFLLEdBQUc7Z0JBQ1AsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQ2pCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO2dCQUN6QixLQUFLLENBQUM7WUFDUCxLQUFLLEdBQUc7Z0JBQ1AsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQ2pCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2dCQUN2QixLQUFLLENBQUM7WUFDUDtnQkFDQyxNQUFNLEdBQUcsQ0FBQztRQUNaLENBQUM7SUFDRixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyJ9