import {gql} from "apollo-server-express";

const typeDefs = gql`
    type Fire {
        _id: String
        x: Float!
        y: Float!
        day: String!
        month: String!
        ffmc: Float!
        dmc: Float!
        dc: Float!
        isi: Float!
        temp: Float!
        rh: Float!
        wind: Float!
        rain: Float!
        rea: Float!
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
            x: Float!,
            y: Float!,
            day: String!,
            month: String!,
            ffmc: Float!,
            dmc: Float!,
            dc: Float!,
            isi: Float!,
            temp: Float!,
            rh: Float!,
            wind: Float!,
            rain: Float!,
            rea: Float!
            ): Fire
    }
`

export default typeDefs