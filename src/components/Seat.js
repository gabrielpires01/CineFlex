import { useState } from "react";

export default function Seat (props) {

    const {isAvailable,name,id} = props.seat;
    const [selected, setSelect] = useState(false)

    const onSelectSeat = () => {
        setSelect(!selected)
        props.callBack(id)
    }
    
    return (
        <button onClick={() => onSelectSeat()} 
            className={`ball ${selected ? 
                'selected': 
                isAvailable ? 'available': 'notAvailable'} `}>
            {name}
        </button>
    )
}