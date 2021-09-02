import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getSeats } from "./Api";
import Footer from "./Footer";
import Seat from "./Seat";
import UserData from "./UserData";


export default function Seats () {
    const {id} = useParams();

    const history = useHistory()
    const {date} = history.location.state;
    const [session, setSession] = useState({})
    const [seats, setSeats] = useState([])
    const [selectedIds, setSelectedIds] = useState([])

    useEffect(() => {
        const promise = getSeats(id);
        promise.then(res => setSeats(res.data.seats))
        promise.then(res => setSession(res.data))
    },[])

    const callBackFunc = (id) => {
        if(!selectedIds.includes(id)) {
            setSelectedIds([...selectedIds, id])
        }else {
            setSelectedIds(selectedIds.filter(item => item !== id))
        }
    }

    return (
        <>
            <div className='seats-page'>
                <h2>Selecione o(s) assento(s)</h2>
                <div className='seats'>
                    {seats.map((seat,index) => <Seat key={index} callBack={callBackFunc} seat={seat}/>)}
                </div>
                <div className='subs'>
                    <div>
                        <div className='ball selected'></div>
                        <p>Selecionado</p>
                    </div>
                    <div>
                        <div className='ball available'></div>
                        <p>Disponível</p>
                    </div>
                    <div>
                        <div className='ball notAvailable'></div>
                        <p>Ocupado</p>
                    </div>
                </div>
                <UserData selectedSeats={selectedIds} film={session} date={date}/>
            </div>
            {/*<Footer film={session.movie}*/}
        </>
    )
}