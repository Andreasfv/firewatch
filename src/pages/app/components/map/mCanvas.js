import { useRef, useEffect, useState, setState, createRef } from "react";
import { empty, useQuery } from "@apollo/client";
import { GET_FIRES } from "../../../../scripts/queries";
import montesinho from "../../../../images/Montesinho.png"
import "./map.css"

//Data class for the matrix.
class matrixData{
    counter = 1;
    constructor(fire){
        this.data = [fire];
    }
    count = () => {
        this.counter++;
    }
}

const arrayFill = () => {
    let matrice = []
    for (let x = 0; x < 9;x++){
        let row = []
        for (let y = 0; y < 9; y++){
            row.push([])
        }
        matrice.push(row);
    }
    return matrice;
}

export default function MCanvas(props) {
    const [blocks, setBlocks] = useState([]);
    const [matrix, setMatrix] = useState(arrayFill())
    const {loading, error, data } = useQuery(GET_FIRES, {
        variables: {
            params: {
                sort: "asc"
            }
        }
    })

    //Fetches all fires, adds all fires to their coordinates. If block is unidentified create matrix data for point.
    //if not, add fire data to location in matrix and bump the counter.

    useEffect (() => {
        if(!loading){
            setMatrix(arrayFill());
            let tempMatrice = matrix;
            console.log(data);
            data.getAllFires.map((fire) => {
                tempMatrice[fire.Y - 1][fire.X - 1].push(fire);
                console.log(tempMatrice[fire.Y - 1][fire.X - 1]);
            })
            console.log(tempMatrice)
            setMatrix(tempMatrice);
            
            let blockCollection = [];
            for (let x = 0; x < 9; x++) {
                let row = []
                for (let y = 0; y < 9; y++) {
                        row.push(<div onClick = { () => {console.log(matrix[x][y])}} className="block" key={(x+1) * (y+1)}>{matrix[x][y].length}</div>)
                }
                blockCollection.push(<div className = "row" >{row}</div>);
            }
            setBlocks(blockCollection);   
        }
    },[loading, matrix]);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    return (
        <div className="map">
            {blocks}
        </div>
    )
}