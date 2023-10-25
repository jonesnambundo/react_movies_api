import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import { HeaderStyle } from './styles';

export function Header(){

    return(
        <HeaderStyle >
        
            <Link to='/'>
                <img src={logo} alt=""/>
            </Link>
                
            <nav>   
                {/* Esta não é a forma convencional a si usar
                <a href="#">Inicio</a>
                <a href="#">Filmes</a>
                <a href="#">Séries</a>*/}

                <Link to= '/'>Inicio</Link>
                <Link to= '/filmes'>Filmes</Link>
                <Link to= '/series'>Series</Link>
            </nav>

        </HeaderStyle >
    );
}