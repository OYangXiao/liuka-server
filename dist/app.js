'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const koa_1 = tslib_1.__importDefault(require("koa"));
const koa_logger_1 = tslib_1.__importDefault(require("koa-logger"));
const config = tslib_1.__importStar(require("./config"));
const router_1 = require("./router");
const err_msgs_1 = require("./err-msgs");
const app = (module.exports = new koa_1.default());
app.use(koa_logger_1.default());
app.use(err_msgs_1.errMsgs);
app.use(router_1.router.routes());
app.use(router_1.router.allowedMethods());
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const bluebird = tslib_1.__importStar(require("bluebird"));
mongoose_1.default.Promise = bluebird.Promise;
const dbUrl = 'mongodb://127.0.0.1/liuka_dev';
mongoose_1.default.connect(dbUrl);
mongoose_1.default.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbUrl);
});
mongoose_1.default.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose_1.default.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});
if (!module.parent)
    app.listen(config.port);
console.log('$ open http://127.0.0.1: ' + config.port);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7OztBQU1iLHNEQUFzQjtBQUl0QixvRUFBZ0M7QUFFaEMseURBQW1DO0FBQ25DLHFDQUFrQztBQUNsQyx5Q0FBcUM7QUFFckMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksYUFBRyxFQUFFLENBQUMsQ0FBQztBQUd6QyxHQUFHLENBQUMsR0FBRyxDQUFDLG9CQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ2xCLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0JBQU8sQ0FBQyxDQUFDO0FBR2pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDekIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztBQUVqQyxnRUFBZ0M7QUFDaEMsMkRBQXFDO0FBQ3JDLGtCQUFRLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7QUFDcEMsTUFBTSxLQUFLLEdBQUcsK0JBQStCLENBQUM7QUFHOUMsa0JBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFeEIsa0JBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRTtJQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQyxDQUFDO0FBQ0gsa0JBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTLEdBQUc7SUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNsRCxDQUFDLENBQUMsQ0FBQztBQUNILGtCQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUU7SUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQyxDQUFDO0FBRUgsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMifQ==