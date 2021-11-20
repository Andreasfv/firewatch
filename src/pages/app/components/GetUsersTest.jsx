import { GET_FIRES } from "../../../scripts/queries";
import {
    useQuery,
  } from "@apollo/client";
import React from "react";

// TODO REMOVE: Currently here just as a copy paste of fetching.
// TODO Fi

export default function getFires() {
    const {loading, error, data } = useQuery(GET_FIRES, {
        variables: {
            params: {
                sort: "asc"
            }
        }
    })
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    
    console.log(data);
    return data.getAllFires.map(({day, month, temp, RH, wind, rain, area}) => (
        <React.Fragment>
            <p>
                {day} : {month} : {temp} : {RH} : {wind} : {rain} : {area}
            </p>
        </React.Fragment>
    ))
}