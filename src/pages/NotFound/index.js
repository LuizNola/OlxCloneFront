import react from 'react';
import { Link } from 'react-router-dom'

function NotFound(){
    return(
        <>
            <h1>Pagina nao encontrada(404)</h1>
            <Link to="/">Volte ai inicio!</Link>
        </>
    )
}
export default NotFound;