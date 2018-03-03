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
const config = __importStar(require("./config"));
const router_1 = require("./router");
const err_msgs_1 = require("./err-msgs");
const app = module.exports = new koa_1.default();
app.use(koa_logger_1.default());
app.use(err_msgs_1.errMsgs);
app.use(router_1.router.routes());
app.use(router_1.router.allowedMethods());
if (!module.parent)
    app.listen(config.port);
console.log('$ open http://127.0.0.1: ' + config.port);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7OztBQU1iLDhDQUFxQjtBQUlyQiw0REFBK0I7QUFFL0IsaURBQWtDO0FBQ2xDLHFDQUFpQztBQUNqQyx5Q0FBb0M7QUFFcEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLGFBQUcsRUFBRSxDQUFBO0FBR3RDLEdBQUcsQ0FBQyxHQUFHLENBQUMsb0JBQU0sRUFBRSxDQUFDLENBQUE7QUFDakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBTyxDQUFDLENBQUM7QUFHakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQTtBQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFBO0FBR2hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDIn0=