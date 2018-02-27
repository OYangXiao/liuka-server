"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const router = new koa_router_1.default();
router.get('/', (ctx) => __awaiter(this, void 0, void 0, function* () {
    ctx.body = 'Hello World!!!!!';
}));
router.get('/test', (ctx) => __awaiter(this, void 0, void 0, function* () {
    ctx.status = 201;
    ctx.body = 'test';
}));
exports.routes = router.routes();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSw0REFBZ0M7QUFJaEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxvQkFBTSxFQUFFLENBQUM7QUFJNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBTyxHQUFHLEVBQUUsRUFBRTtJQUUxQixHQUFHLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDO0FBRWxDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFJSCxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFPLEdBQUcsRUFBRSxFQUFFO0lBRTlCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBRWpCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBRXRCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFJVSxRQUFBLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMifQ==