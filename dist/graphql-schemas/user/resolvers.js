"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let users = [
    {
        _id: 'awefawefeaweg',
        id: 1,
        phone: '123328473272',
        unm: 'oyx',
        pic: 'awefij',
        sig: 'wefejaweoifij'
    }
];
exports.resolvers = {
    Query: {
        user: (_, { id }) => users.find((user) => user.id === id)
    },
    Mutation: {
        phoneEmailFirstInit: (_, { phone }) => {
            const newuser = {
                _id: (Math.random() * 10000000).toFixed(0).toString(),
                id: 2,
                phone: phone,
                unm: 'any',
                pic: 'w9ef',
                sig: 'w8efwef8',
                regTime: Date.now()
            };
            users.push(newuser);
            return users[users.length - 1];
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dyYXBocWwtc2NoZW1hcy91c2VyL3Jlc29sdmVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQUksS0FBSyxHQUFZO0lBQ3BCO1FBQ0MsR0FBRyxFQUFFLGVBQWU7UUFDcEIsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsY0FBYztRQUNyQixHQUFHLEVBQUUsS0FBSztRQUNWLEdBQUcsRUFBRSxRQUFRO1FBQ2IsR0FBRyxFQUFFLGVBQWU7S0FDcEI7Q0FDRCxDQUFDO0FBRVcsUUFBQSxTQUFTLEdBQUc7SUFDeEIsS0FBSyxFQUFFO1FBQ04sSUFBSSxFQUFFLENBQUMsQ0FBTSxFQUFFLEVBQUUsRUFBRSxFQUFrQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztLQUM5RTtJQUNELFFBQVEsRUFBRTtRQUVULG1CQUFtQixFQUFFLENBQUMsQ0FBTSxFQUFFLEVBQUUsS0FBSyxFQUFrQixFQUFFLEVBQUU7WUFDMUQsTUFBTSxPQUFPLEdBQVU7Z0JBQ3RCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUNyRCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxLQUFLLEVBQUUsS0FBSztnQkFDWixHQUFHLEVBQUUsS0FBSztnQkFDVixHQUFHLEVBQUUsTUFBTTtnQkFDWCxHQUFHLEVBQUUsVUFBVTtnQkFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTthQUNuQixDQUFDO1lBQ0YsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwQixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQztLQUNEO0NBQ0QsQ0FBQyJ9