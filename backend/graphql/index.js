//resolverimports
import fireResolver from "./schema/user/fireResolver"
//Schema imports
import fireSchema from "./schema/user/fireSchema"

//resolver exports
export const resolvers = [fireResolver]

//Type defs/schema exports
export const typeDefs = [fireSchema]