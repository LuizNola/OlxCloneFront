import react from 'react';
import { HeaderArea } from './styled'
import { isLogged } from '../../../helpers/AuthHendler'

import { Link } from 'react-router-dom'

const Header = () => {
    let logged = isLogged();

    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="logo1">A</span>
                        <span className="logo2">B</span>
                        <span className="logo3">C</span>
                    </Link>
                </div>
                <nav>
                    <ul>

                        {logged &&
                            <>
                                <li>
                                    <Link to="/my-account">Minha Conta</Link>
                                </li>
                                <li>
                                    <Link to="/signout">Sair</Link>
                                </li>
                                <li >
                                    <Link to="/post-an-ad" className="button">Faça um anuncio!</Link>
                                </li>
                            </>
                        }
                        {!logged &&
                            <>
                                <li>
                                    <Link to="/signin">Login</Link>
                                </li>
                                <li>
                                    <Link to="/signup">Cadastrar</Link>
                                </li>
                            </>
                        }


                    </ul>
                </nav>
            </div>
        </HeaderArea>
    )
}

export default Header;