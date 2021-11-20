import {
    gql
  } from "@apollo/client";

export const GET_FIRES = gql`
    query GetFires {
        getAllFires {
          _id
          month
          day
          temp
          RH
          wind
          rain
          area
          X
          Y
        }
    }
    `