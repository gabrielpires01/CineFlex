import { getFilms } from './Api'
import React, { useEffect } from 'react'

export default function Films () {

    useEffect(() => {
        const promise = getFilms()

    },[])

    return (
        <div>
            {}
        </div>
    )
}