import { Link, useParams } from "react-router-dom"

export default function Film (props) {
    const {posterURL,title,id} =  props.film;
    return (
        <Link className='card' to={`/sessoes/${id}`}>
            <img src={posterURL}></img>
            <p>{title}</p>
        </Link>
    )
}