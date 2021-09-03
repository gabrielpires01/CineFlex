import { matchPath, useHistory } from "react-router-dom";

export default function Footer (props) {

    const history = useHistory()
    const match = matchPath(history.location.pathname, {
        path: '/assentos/:id',
        exact: true,
        strict: true
    })

    const {posterURL,title} = (props && props.film) ? props.film : {};
    const {day} = (props && props.session) ? props.session : {};

    return (
        <footer>
            <div className='footer-img'>
                <img src={posterURL}></img>
                {console.log(day)}
            </div>
            <div className="date">
                <div className='title'>{title}</div>
                <div>{day === undefined ? <></>: day.date}</div>
            </div>
        </footer>
    )
}   