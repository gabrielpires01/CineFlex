import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom";
import { getSessions } from "./Api"

export default function Sessions () {

    const { id } = useParams();
    const [sessions, getShowTimes] = useState([]);

    useEffect(() => {
        const promise = getSessions(id);
        promise.then(res => {
            console.log(res.data)
            return getShowTimes(res.data)})
    },[])

    return (
        <>
            <h2>Selecione o horário</h2>

        </>
    )

}