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
        createUser: (_, { phone }) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dyYXBocWwtc2NoZW1hcy91c2VyL3Jlc29sdmVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQUksS0FBSyxHQUFZO0lBQ3BCO1FBQ0MsR0FBRyxFQUFFLGVBQWU7UUFDcEIsRUFBRSxFQUFFLENBQUM7UUFDTCxLQUFLLEVBQUUsY0FBYztRQUNyQixHQUFHLEVBQUUsS0FBSztRQUNWLEdBQUcsRUFBRSxRQUFRO1FBQ2IsR0FBRyxFQUFFLGVBQWU7S0FDcEI7Q0FDRCxDQUFDO0FBRVcsUUFBQSxTQUFTLEdBQUc7SUFDeEIsS0FBSyxFQUFFO1FBQ04sSUFBSSxFQUFFLENBQUMsQ0FBTSxFQUFFLEVBQUUsRUFBRSxFQUFrQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztLQUM5RTtJQUNELFFBQVEsRUFBRTtRQUNULFVBQVUsRUFBRSxDQUFDLENBQU0sRUFBRSxFQUFFLEtBQUssRUFBcUIsRUFBRSxFQUFFO1lBQ3BELE1BQU0sT0FBTyxHQUFVO2dCQUN0QixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQkFDckQsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osR0FBRyxFQUFFLEtBQUs7Z0JBQ1YsR0FBRyxFQUFFLE1BQU07Z0JBQ1gsR0FBRyxFQUFFLFVBQVU7Z0JBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7YUFDbkIsQ0FBQztZQUNGLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FDRDtDQUNELENBQUMifQ==