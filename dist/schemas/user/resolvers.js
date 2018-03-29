"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
exports.resolvers = {
    Query: {
        user: async () => await model_1.UserModel.findOne()
    },
    Mutation: {
        phoneEmailFirstInit: async (_, { phone, email }) => {
            try {
                return await new model_1.UserModel({
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
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NjaGVtYXMvdXNlci9yZXNvbHZlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBb0M7QUFFdkIsUUFBQSxTQUFTLEdBQUc7SUFDeEIsS0FBSyxFQUFFO1FBQ04sSUFBSSxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsTUFBTSxpQkFBUyxDQUFDLE9BQU8sRUFBRTtLQUMzQztJQUNELFFBQVEsRUFBRTtRQUVULG1CQUFtQixFQUFFLEtBQUssRUFBRSxDQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFrQixFQUFFLEVBQUU7WUFDdkUsSUFBSSxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxNQUFNLElBQUksaUJBQVMsQ0FBQztvQkFDMUIsS0FBSyxFQUFFLEtBQUs7b0JBQ1osS0FBSyxFQUFFLEtBQUs7b0JBQ1osR0FBRyxFQUFFLEtBQUs7b0JBQ1YsR0FBRyxFQUFFLE1BQU07b0JBQ1gsR0FBRyxFQUFFLFVBQVU7b0JBQ2YsSUFBSSxFQUFFLENBQUM7b0JBQ1AsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFO2lCQUNuQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWCxDQUFDO1lBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDZCxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ1osQ0FBQztRQUNGLENBQUM7S0FDRDtDQUNELENBQUMifQ==