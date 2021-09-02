import { ImHome } from 'react-icons/im';
import { IconContext } from 'react-icons';
import { Link, useLocation } from 'react-router-dom';

export default function Header (props) {

    const location = useLocation();

    return (
        <header>
            {location.pathname !== '/' ?
                <div className='home-icon'>
                    <IconContext.Provider value={{ className: "icon"}}>
                        <Link to='/'><ImHome /></Link>
                    </IconContext.Provider>
                </div> : <></>}
            <h1>CINEFLEX</h1>
        </header>
    )
}