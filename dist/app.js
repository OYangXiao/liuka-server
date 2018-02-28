'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const config_1 = require("./config");
const router_1 = require("./router");
const err_msgs_1 = require("./err-msgs");
const app = module.exports = new koa_1.default();
app.use(koa_logger_1.default());
app.use(koa_bodyparser_1.default({
    enableTypes: ['json']
}));
app.use(err_msgs_1.errMsgs);
app.use(router_1.router.routes());
app.use(router_1.router.allowedMethods());
if (!module.parent)
    app.listen(config_1.config.port);
console.log('$ open http://127.0.0.1: ' + config_1.config.port);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBTWIsOENBQXFCO0FBSXJCLDREQUErQjtBQUMvQixvRUFBdUM7QUFFdkMscUNBQWlDO0FBQ2pDLHFDQUFpQztBQUNqQyx5Q0FBb0M7QUFFcEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLGFBQUcsRUFBRSxDQUFBO0FBR3RDLEdBQUcsQ0FBQyxHQUFHLENBQUMsb0JBQU0sRUFBRSxDQUFDLENBQUE7QUFDakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyx3QkFBVSxDQUFDO0lBQ2YsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDO0NBQ3hCLENBQUMsQ0FBQyxDQUFBO0FBQ0gsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBTyxDQUFDLENBQUM7QUFJakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQTtBQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFBO0FBR2hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsZUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEdBQUcsZUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDIn0=