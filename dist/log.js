"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
function outputLog(data, thrownError) {
    if (config_1.config.prettyLog) {
        console.log(`${data.statusCode} ${data.method} ${data.url} - ${data.responseTime}ms`);
        if (thrownError) {
            console.error(thrownError);
        }
    }
    else if (data.statusCode < 400) {
        process.stdout.write(JSON.stringify(data) + '\n');
    }
    else {
        process.stderr.write(JSON.stringify(data) + '\n');
    }
}
function logger(ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const start = new Date().getMilliseconds();
        const logData = {
            method: ctx.method,
            url: ctx.url,
            query: ctx.query,
            remoteAddress: ctx.request.ip,
            host: ctx.headers['host'],
            userAgent: ctx.headers['user-agent'],
        };
        let errorThrown = null;
        try {
            yield next();
            logData.statusCode = ctx.status;
        }
        catch (e) {
            errorThrown = e;
            logData.errorMessage = e.message;
            logData.errorStack = e.stack;
            logData.statusCode = e.status || 500;
            if (e.data) {
                logData.data = e.data;
            }
        }
        logData.responseTime = new Date().getMilliseconds() - start;
        outputLog(logData, errorThrown);
        if (errorThrown) {
            throw errorThrown;
        }
    });
}
exports.logger = logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEscUNBQWtDO0FBa0JsQyxtQkFBbUIsSUFBdUIsRUFBRSxXQUFnQjtJQUN4RCxFQUFFLENBQUMsQ0FBQyxlQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7UUFDdEYsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNMLENBQUM7SUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQW9CLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxJQUFJLENBQUMsQ0FBQztRQUNGLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQztBQUNMLENBQUM7QUFFRCxnQkFBNkIsR0FBZ0IsRUFBRSxJQUF3Qjs7UUFFbkUsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUUzQyxNQUFNLE9BQU8sR0FBc0I7WUFDL0IsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO1lBQ2xCLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRztZQUNaLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSztZQUNoQixhQUFhLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzdCLElBQUksRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUN6QixTQUFTLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7U0FDdkMsQ0FBQztRQUVGLElBQUksV0FBVyxHQUFRLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUM7WUFDRCxNQUFNLElBQUksRUFBRSxDQUFDO1lBQ2IsT0FBTyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ3BDLENBQUM7UUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1AsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNoQixPQUFPLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDakMsT0FBTyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUM7WUFDckMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzFCLENBQUM7UUFDTCxDQUFDO1FBRUQsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLGVBQWUsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUM1RCxTQUFTLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRWhDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDZCxNQUFNLFdBQVcsQ0FBQztRQUN0QixDQUFDO0lBQ0wsQ0FBQztDQUFBO0FBbENELHdCQWtDQyJ9