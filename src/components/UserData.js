import { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom";
import { postReservation } from "./Api";

export default function UserData (props) {

    const {selectedSeats,film,day} = props;
    
    const [state, setState] = useState({
        buyerName: "",
        buyerCpf: "",
        seats: selectedSeats,
        film: film.movie,
        hour: film.name,
        date: (day && day.date) ? day.date : ''
    })

    useEffect(() => {
        setState(prevState =>({
            ...prevState,
            seats: selectedSeats,
            film:film.movie,
            hour: film.name,
            date: (day && day.date) ? day.date : ''
        }))
        console.log(film.day)
        console.log(state)
    },[selectedSeats,film])

    function handleChange (e) {
        const target = e.target;
        const value = target.value;
        if (target.name === 'name') {
            setState(prevState => ({
                ...prevState,
                buyerName: value,
                film:film.movie,
                hour: film.name,
                date: (day && day.date) ? day.date : ''
            }))
        } else {
            setState(prevState => ({
                ...prevState,
                buyerCpf: value,
                film:film.movie,
                hour: film.name,
                date: (day && day.date) ? day.date : ''
            }))
        }
    }

    function handleSubmit (e) {
        postReservation(state)
    }

    return (
        <form>
            <label>Nome do Comprador:
                <input 
                    type='text' 
                    name='name' 
                    value={state.buyerName}
                    onChange={handleChange}
                    placeholder='Digite seu nome...'
                />
            </label>
            <label>CPF do Comprador:
                <input 
                    type='text' 
                    name='cpf' 
                    value={state.buyerCpf}
                    onChange={handleChange}
                    placeholder='Digite seu CPF...'
                />
            </label>
            <button type='submit' onClick={() => handleSubmit()}>
                <Link to={{
                pathname: '/sucesso',
                state}}>
                    Reservar Assento(s)
                </Link>
            </button>
            
        </form>
    )
}