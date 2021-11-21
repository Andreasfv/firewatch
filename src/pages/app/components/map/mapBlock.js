import { createRef } from "react"
import { of } from "zen-observable";


export default function MapBlock(props) {
    props = props.props
    const blockRef = createRef();

    const onBlockClick = () => {
        if(props.empty) return
    }

    const onBlockEnter = () => {
        if(props.empty) return
        props.setHoverData({hovered: true, data: props.data});
    }
    return(
        <div onClick = {()=> {onBlockClick()}}
            onMouseEnter = {()=> {onBlockEnter()}}
             className="block" 
             key={Math.random(1000) * Math.random(100)}>
                 {props.data.length > 0 ? props.data.length : null}
        </div>
    )
}