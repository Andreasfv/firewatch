import {
    gql
  } from "@apollo/client";

export const GET_USERS = gql`
    query GetUsers {
        getAllUsers {
        name
        email
        role
        auth
        }
    }
    `