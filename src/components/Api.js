import { func } from "assert-plus";
import axios from "axios";

function getFilms () {
    return axios('https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies')
}


function getSessions (id) {

}

export {getFilms,getSessions};