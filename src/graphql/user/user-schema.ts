import { DateSchema } from '../date-schema'

export const User = `
    type User {
        _id: ID
        id: Int!
        phone: String!

        unm: String
        pic: String
        sig: string
    }
`