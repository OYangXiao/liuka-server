"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const UserModel = mongoose_1.default.model('User');
exports.resolvers = {
    Query: {
        user: () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield UserModel.find().limit(1);
            return user;
        })
    },
    Mutation: {
        phoneEmailFirstInit: (_, { phone, email }) => {
            const newuser = new UserModel({
                _id: (Math.random() * 10000000).toFixed(0).toString(),
                id: 2,
                phone: phone,
                email: email,
                unm: 'any',
                pic: 'w9ef',
                sig: 'w8efwef8',
                regTime: Date.now()
            });
            try {
                newuser.save();
            }
            catch (err) {
                return newuser;
            }
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dyYXBocWwtc2NoZW1hcy91c2VyL3Jlc29sdmVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxnRUFBZ0M7QUFDaEMsTUFBTSxTQUFTLEdBQUcsa0JBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFNUIsUUFBQSxTQUFTLEdBQUc7SUFDeEIsS0FBSyxFQUFFO1FBQ04sSUFBSSxFQUFFLEdBQVMsRUFBRTtZQUNoQixNQUFNLElBQUksR0FBRyxNQUFNLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNiLENBQUMsQ0FBQTtLQUNEO0lBQ0QsUUFBUSxFQUFFO1FBRVQsbUJBQW1CLEVBQUUsQ0FBQyxDQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFrQixFQUFFLEVBQUU7WUFDakUsTUFBTSxPQUFPLEdBQUcsSUFBSSxTQUFTLENBQUM7Z0JBQzdCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUNyRCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxLQUFLLEVBQUUsS0FBSztnQkFDWixLQUFLLEVBQUUsS0FBSztnQkFDWixHQUFHLEVBQUUsS0FBSztnQkFDVixHQUFHLEVBQUUsTUFBTTtnQkFDWCxHQUFHLEVBQUUsVUFBVTtnQkFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTthQUNuQixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUM7Z0JBQ0osT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hCLENBQUM7WUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNkLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDaEIsQ0FBQztRQUNGLENBQUM7S0FDRDtDQUNELENBQUMifQ==