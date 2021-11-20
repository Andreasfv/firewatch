import {
    gql
  } from "@apollo/client";

export const GET_FIRES = gql`
    query GetFires {
        getAllFires {
          month
          day
          temp
          RH
          wind
          rain
          area
        }
    }
    `