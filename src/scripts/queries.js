import {
    gql
  } from "@apollo/client";


// TODO 
// Look into paging and sorting, shouldn't be very different with apollo.
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