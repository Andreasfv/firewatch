import { GET_USERS } from "../../../scripts/queries";
import {
    useQuery,
  } from "@apollo/client";
import React from "react";
let fireCSVString = "7,5,mar,fri,86.2,26.2,94.3,5.1,8.2,51,6.7,0,0"
let translateFireWatchCSV = (fire) =>{
    let stringu = fire.split(",");
    console.log(stringu);
}
export default function GetUsers() {
    const {loading, error, data } = useQuery(GET_USERS)
    translateFireWatchCSV(fireCSVString);
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    
    console.log(data);
    return data.getAllUsers.map(({name, email}) => (
        <React.Fragment>
            <p>
                {name} : {email}
            </p>
        </React.Fragment>
    ))
}