import { createRef } from "react"
import { of } from "zen-observable";


export default function MapBlock(props) {
    props = props.props
    const blockRef = createRef();

    const onBlockClick = () => {
        if(props.empty) return
        console.log(props);
    }
    const onBlockEnter = () => {
        if(props.empty) return
        console.log(props.x, props.y, props.data)
        props.setHoverData({hovered: true, data: props.data});
    }
    return(
        <div onClick = {()=> {onBlockClick()}}
            onMouseEnter = {()=> {onBlockEnter()}}
             className="block" 
             key={(props.x+1) + "x" + (props.y+1)}>
                 {props.data.length > 0 ? props.data.length : null}
        </div>
    )
}