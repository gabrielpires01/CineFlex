import { useHistory } from "react-router"
import { Link } from "react-router-dom";

export default function Success (props) {

    const history = useHistory();

    const {buyerCpf,buyerName,seats,film,hour,date} = (history.location && history.location.state ) || {}

    return (
        <div className='finalized'>
            <h2 className='success'>Pedido feito com sucesso</h2>
            <div className='list'>
                <div>
                    <h3>Filme e sessão</h3>
                    <p>{film.title}</p>
                    <p>{date} {hour}</p>
                </div>
                <div>
                    <h3>Ingressos</h3>
                    {seats.map(seat => <p>Assento {seat}</p>)}
                </div>
                <div>
                    <h3>Comprador</h3>
                    <p>Nome: {buyerName}</p>
                    <p>CPF: {buyerCpf}</p>
                </div>
            </div>
            <button><Link to='/'>Voltar para home</Link></button>
        </div>
    )
}