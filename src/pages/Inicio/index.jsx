import { Link } from "react-router-dom"
import { Banner } from "../../components/Banner"
import cardHomeMovies from "../../images/card-home-movies.png"
import cardHomeSeries from "../../images/card-home-series.png"
import { CardsHomeStyle } from "./style"

export function Inicio() {
    return(
        <>
            <Banner title="Filmes & Série">
                <p>Lista de Filmes e series baseada na API The movie DB.
                    Confira as produçôes mais populares do mundo.
                </p>
            </Banner>

            <CardsHomeStyle>
                    <Link to='/filmes'>
                        <img src={cardHomeMovies} />
                    </Link>
                    <Link to='/filmes'>
                        <img src={cardHomeSeries} />
                    </Link>
            </CardsHomeStyle>
        </>
    )
}