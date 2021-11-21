import { createRef } from "react"
import { of } from "zen-observable";


export default function MapBlock(props) {
    props = props.props
    console.log(props.data)
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
             key={props._id}>
                 {props.data.length > 0 ? props.data.length : null}
        </div>
    )
}