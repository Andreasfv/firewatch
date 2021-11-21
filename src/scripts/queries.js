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
export const CREATE_FIRE = gql`
    mutation CreateFire(
      $month: String!
      $day: String!
      $temp: Float!
      $RH: Float!
      $wind: Float!
      $rain: Float!
      $area: Float!
      $X: Int!
      $Y: Int!
      ) {
        createFire(
          month: $month, 
          day: $day, 
          temp: $temp, 
          RH: $RH, 
          wind: $wind, 
          rain: $rain, 
          area: $area, 
          X: $X, 
          Y: $Y
        )

    }
`