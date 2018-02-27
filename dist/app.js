'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa_jwt_1 = __importDefault(require("koa-jwt"));
const config_1 = require("./config");
const app = new koa_1.default();
app.use(koa_logger_1.default());
app.use(koa_bodyparser_1.default({
    enableTypes: ['json']
}));
app.use(function (ctx, next) {
    return next().catch((err) => {
        if (401 == err.status) {
            ctx.status = 401;
            ctx.body =
            ;
        }
        else {
            throw err;
        }
    });
});
app.use(koa_jwt_1.default({ secret: "awefoijwefoijwef23893483423" }));
app.use(function (ctx) {
    if (ctx.url.match(/^\/api/)) {
        ctx.body = 'protected\n';
    }
});
app.listen(config_1.config.port);
console.log('$ open http://127.0.0.1: ' + config_1.config.port);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxZQUFZLENBQUM7Ozs7O0FBTWIsOENBQXFCO0FBS3JCLDREQUErQjtBQUMvQixvRUFBdUM7QUFDdkMsc0RBQXlCO0FBRXpCLHFDQUFpQztBQUVqQyxNQUFNLEdBQUcsR0FBRyxJQUFJLGFBQUcsRUFBRSxDQUFBO0FBRXJCLEdBQUcsQ0FBQyxHQUFHLENBQUMsb0JBQU0sRUFBRSxDQUFDLENBQUE7QUFDakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyx3QkFBVSxDQUFDO0lBQ2YsV0FBVyxFQUFDLENBQUMsTUFBTSxDQUFDO0NBQ3ZCLENBQUMsQ0FBQyxDQUFBO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFTLEdBQUcsRUFBRSxJQUFJO0lBQ3hCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUMxQixFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdEIsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDakIsR0FBRyxDQUFDLElBQUk7Z0JBQ1YsQUFEWSxKQUFBLENBQUE7UUFDWixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLEdBQUcsQ0FBQztRQUNaLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0gsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBRyxDQUFDLEVBQUMsTUFBTSxFQUFDLDZCQUE2QixFQUFDLENBQUMsQ0FBQyxDQUFBO0FBR3BELEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBUyxHQUFHO0lBQ2hCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixHQUFHLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztJQUMzQixDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFJTCxHQUFHLENBQUMsTUFBTSxDQUFDLGVBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixHQUFHLGVBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyJ9