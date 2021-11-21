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
  $X: Int!
  $day: String!
  $month: String!
  $temp: Float!
  $RH: Float!
  $wind: Float!
  $rain: Float!
  $area: Float!
  $Y: Int!
) {
  createFire(
    X: $X
    day: $day
    month: $month
    temp: $temp
    RH: $RH
    wind: $wind
    rain: $rain
    area: $area
    Y: $Y
  ) {
    X
    Y
    day
    month
    temp
    wind
    RH
    rain
    area
  }
}
`