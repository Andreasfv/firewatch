import {gql} from "apollo-server-express";

const typeDefs = gql`
    enum Month {
        jan
        feb
        mar
        apr
        may
        jun
        jul
        aug
        sep
        oct
        nov
        dec
    }
    
    enum Day {
        mon
        tue
        wed
        thu
        fri
        sat
        sun
    }

    enum Sort {
        asc
        desc
    }

    type Fire {
        _id: String
        X: Int!
        Y: Int!
        day: Day!
        month: Month!
        FFMC: Float!
        DMC: Float!
        DC: Float!
        ISI: Float!
        temp: Float!
        RH: Float!
        wind: Float!
        rain: Float!
        area: Float!
    }
"""
    input UserInput {
        name: String!
        email: String!
        role: Role!
    }
"""
    type Query {
        getAllFires: [Fire]
        getFire(_id: String): Fire
    }

    type Mutation {
        createFire(        
            _id: String!,
            X: Int!,
            Y: Int!,
            day: String!,
            month: String!,
            FFMC: Float!,
            DMC: Float!,
            DC: Float!,
            ISI: Float!,
            temp: Float!,
            RH: Float!,
            wind: Float!,
            rain: Float!,
            area: Float!
            ): Fire
    }
`

export default typeDefs