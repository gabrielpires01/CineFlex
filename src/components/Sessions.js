import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getSessions } from "./Api"
import Footer from "./Footer";
import ShowTime from "./ShowTime";

export default function Sessions () {

    const { id } = useParams();
    const [sessions, getShowTimes] = useState([]);
    const [film, getFilm] = useState([]);

    useEffect(() => {
        const promise = getSessions(id);
        promise.then(res => {
            getFilm(res.data)
            getShowTimes(res.data.days)
        })
    },[])

    return (
        <div className='showtime'>
            <h2>Selecione o horário</h2>
            <div className='showtime-list'>
                {sessions.map((day,index)=> <ShowTime key={index} day={day}/>)}
            </div>
            <Footer film={film} />
        </div>
    )

}