import { useRef, useEffect, useState, setState, createRef } from "react";
import { empty, useQuery } from "@apollo/client";
import { GET_FIRES } from "../../../../scripts/queries";
import MapBlock from "./mapBlock";
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
    const {reload} = props;
    const [blocks, setBlocks] = useState([]);
    const [matrix, setMatrix] = useState(arrayFill())
    const {loading, error, data, refetch } = useQuery(GET_FIRES, {
        variables: {
            params: {
                sort: "asc"
            }
        },
        onCompleted: (data) => {
            console.log(data);
            loadMap();
        },
    })

    //Fetches all fires, adds all fires to their coordinates in a matrice. Then creates div blocks that covers
    //the areas of the map.
    const loadMap = () => {
        console.log(`"reload map called, status of loading: ${loading}"`)
        if(!loading){
            let tempMatrice = arrayFill();
            data.getAllFires.map((fire) => {
                //Dette gir ikke mening, det blir riktig hvis jeg gjør det motsatt av all fornuft?? y, x blir x, y etterpå??
                tempMatrice[fire.Y - 1][fire.X - 1].push(fire);
            })
            console.log(tempMatrice)
            let blockCollection = [];
            for (let x = 0; x < 9; x++) {
                let row = []
                for (let y = 0; y < 9; y++) {
                    let blockProps = {
                        empty: false,
                        data: [],
                        x: x,
                        y: y,
                        setHoverData: props.setHoverData,
                    }

                    if(tempMatrice[x][y].length == 0) {
                        blockProps.empty = true;
                    } else {
                        blockProps.data = tempMatrice[x][y];
                    }
                    
                    row.push(<MapBlock props = {blockProps}/>)
                }
                blockCollection.push(<div keys={"row"+x} className = "row" >{row}</div>);
            }
            console.log(blockCollection)
            setBlocks(blockCollection);   
        }
    }

    useEffect(()=> {
        console.log("Should run twice", loading)
        loadMap();
    }, [data])
    useEffect(() => {
            console.log("REFETCHING")
            if(refetch) {
                refetch()
            }
    }, [reload])

    useEffect(()=>{

    }, blocks)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    
    return (
        <div className="map">
            {blocks}
        </div>
    )
}