import axios from "axios";

function getFilms () {
    return axios('https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies')
}


function getSessions (id) {
    return axios(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${id}/showtimes`)
}

export {getFilms,getSessions};