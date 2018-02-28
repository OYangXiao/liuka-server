'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const config = __importStar(require("./config"));
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
    app.listen(config.port);
console.log('$ open http://127.0.0.1: ' + config.port);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7OztBQU1iLDhDQUFxQjtBQUlyQiw0REFBK0I7QUFDL0Isb0VBQXVDO0FBRXZDLGlEQUFrQztBQUNsQyxxQ0FBaUM7QUFDakMseUNBQW9DO0FBRXBDLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxhQUFHLEVBQUUsQ0FBQTtBQUd0QyxHQUFHLENBQUMsR0FBRyxDQUFDLG9CQUFNLEVBQUUsQ0FBQyxDQUFBO0FBQ2pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsd0JBQVUsQ0FBQztJQUNmLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQztDQUN4QixDQUFDLENBQUMsQ0FBQTtBQUNILEdBQUcsQ0FBQyxHQUFHLENBQUMsa0JBQU8sQ0FBQyxDQUFDO0FBR2pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7QUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQTtBQUdoQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyJ9