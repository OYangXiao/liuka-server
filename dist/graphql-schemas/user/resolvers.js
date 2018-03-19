"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const model_1 = require("./model");
exports.resolvers = {
    Query: {
        user: () => tslib_1.__awaiter(this, void 0, void 0, function* () { return yield model_1.UserModel.findOne(); })
    },
    Mutation: {
        phoneEmailFirstInit: (_, { phone, email }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield new model_1.UserModel({
                    phone: phone,
                    email: email,
                    unm: 'any',
                    pic: 'w9ef',
                    sig: 'w8efwef8',
                    test: 3,
                    regTime: new Date()
                }).save();
            }
            catch (err) {
                return err;
            }
        })
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dyYXBocWwtc2NoZW1hcy91c2VyL3Jlc29sdmVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBb0M7QUFFdkIsUUFBQSxTQUFTLEdBQUc7SUFDeEIsS0FBSyxFQUFFO1FBQ04sSUFBSSxFQUFFLEdBQVMsRUFBRSx3REFBQyxNQUFNLENBQU4sTUFBTSxpQkFBUyxDQUFDLE9BQU8sRUFBRSxDQUFBLEdBQUE7S0FDM0M7SUFDRCxRQUFRLEVBQUU7UUFFVCxtQkFBbUIsRUFBRSxDQUFPLENBQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQWtCLEVBQUUsRUFBRTtZQUN2RSxJQUFJLENBQUM7Z0JBQ0osTUFBTSxDQUFDLE1BQU0sSUFBSSxpQkFBUyxDQUFDO29CQUMxQixLQUFLLEVBQUUsS0FBSztvQkFDWixLQUFLLEVBQUUsS0FBSztvQkFDWixHQUFHLEVBQUUsS0FBSztvQkFDVixHQUFHLEVBQUUsTUFBTTtvQkFDWCxHQUFHLEVBQUUsVUFBVTtvQkFDZixJQUFJLEVBQUUsQ0FBQztvQkFDUCxPQUFPLEVBQUUsSUFBSSxJQUFJLEVBQUU7aUJBQ25CLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNYLENBQUM7WUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNkLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDWixDQUFDO1FBQ0YsQ0FBQyxDQUFBO0tBQ0Q7Q0FDRCxDQUFDIn0=