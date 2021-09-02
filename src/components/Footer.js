export default function Footer (props) {
    const {posterURL,title} = props.film;
    return (
        <footer>
            <div className='footer-img'>
                <img src={posterURL}></img>
            </div>
            <div className='title'>{title}</div>
        </footer>
    )
}   