import { Link } from "react-router-dom"

export default function Film (props) {
    const {posterURL,id} =  props.film;
    return (
        <Link to={`/sessoes/${id}`}>
            <div className='card'>
                <img src={posterURL}></img>
            </div>
        </Link>
    )
}