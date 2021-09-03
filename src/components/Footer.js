export default function Footer (props) {

    const {posterURL,title} = (props && props.film) ? props.film : {};
    const {day,name} = (props && props.session) ? props.session : {};

    return (
        <footer>
            <div className='footer-img'>
                <img src={posterURL}></img>
            </div>
            <div className="date">
                <div className='title'>{title}</div>
                <div>{day === undefined ? <></>: <>{day.weekday} {name}</>}</div>
            </div>
        </footer>
    )
}   