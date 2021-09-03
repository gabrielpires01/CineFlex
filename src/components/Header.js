import { BiArrowBack } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { Link, useHistory, useLocation } from 'react-router-dom';

export default function Header (props) {

    const history = useHistory();
    console.log(history)
    const location = useLocation();

    const setOneBack = () => {
        history.goBack()
    }

    return (
        <header>
            {location.pathname !== '/' ?
                <div className='home-icon'>
                    <IconContext.Provider value={{ className: "icon"}}>
                        <button onClick={setOneBack}><BiArrowBack /></button>
                    </IconContext.Provider>
                </div> : <></>}
            <h1>CINEFLEX</h1>
        </header>
    )
}