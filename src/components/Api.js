import axios from "axios";

function getFilms () {
    return axios('https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies')
}


function getSessions (id) {
    return axios(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${id}/showtimes`)
}

function getSeats (id) {
    return axios(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${id}/seats`)
}

function postReservation (reservation) {
    return axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many', {
        ids: reservation.seats,
        name: reservation.buyerName,
        cpf: reservation.buyerCpf
    })
}

export {getFilms,getSessions,getSeats,postReservation};