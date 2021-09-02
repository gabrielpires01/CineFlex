import { getFilms } from './Api'
import { useEffect, useState } from 'react'
import Film from './Film'

export default function Films () {

    const [films,setFilms] = useState([])

    useEffect(() => {
        const promise = getFilms()
        promise.then(res => setFilms(res.data))
    },[])

    return (
        <div className='films'>
            <h2>Selecione o filme</h2>
            <div className='film-list'>
                {films.map((item, index) => <Film key={index} film={item}/>)}
            </div>
        </div>
    )
}