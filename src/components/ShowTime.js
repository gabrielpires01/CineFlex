import { Link } from "react-router-dom";

export default function ShowTime (props) {

    const {weekday,date,showtimes} = props.day;

    return (
        <div className='weekday'>
            <h3>{weekday} - {date}</h3>
            <div className='hours'>
                {showtimes.map(hour => <Link to={{
                    pathname:`/assentos/${hour.id}`,
                    state: date}}><div className='hour'>{hour.name}</div></Link>)}
            </div>
        </div>
    )
}