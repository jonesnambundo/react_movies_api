import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { CardContent, CardsItem, CardsList, ListNav } from './style';
import star from '../../images/star.svg'
import { Link, useNavigate } from "react-router-dom";

export function List({category}){

    const [items, setItems] = useState([]);
    const [tipo, setTipo] = useState('popular');
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    useEffect(() =>{

        if(search !=='') {
            axios.get (`https://api.themoviedb.org/3/search/${category}`, {
                params : {
                    pag :1,
                    language: 'pt-BR',
                    api_key: 'f975b4f5e10040b0ed800db3826ac8bc',
                    query: search
                }
            })
    
            //sucesso
            .then(response => {
                setItems(response.data.results);
            })
    
            //erro
            .catch(error => {
                console.log(error.message);
            })
        }
    },[search])

    useEffect (() =>{

        //console.log('componente List renderizado');
        //get - > consultar
        //post -> enviar
        //put -> atualizar
        //delete -> excluir

        axios.get (`https://api.themoviedb.org/3/${category}/${tipo}`, {
            params : {
                pag :1,
                language: 'pt-BR',
                api_key: 'f975b4f5e10040b0ed800db3826ac8bc'
            }
        })

        //sucesso
        .then(response => {
            setItems(response.data.results);
        })

        //erro
        .catch(error => {
            console.log(error.message);
        })
    },[tipo]);

    return (
        <div className="container">
            <ListNav>
                <form>
                    <input type="text" placeholder="Busque um filme" 
                    value = {search}
                        onChange={(e)=> setSearch(e.target.value)} 
                    />
                </form>

                <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                    <option value={"popular"}>Popular</option>
                    <option value={"top_rated"}>Tops</option>
                    
                    {category === 'movie' 
                    ? <option value={"now_playing"}>Em Cartaz</option>
                    : <option value={"airing_today"}>Em Exibição hojez</option>
                    }
                </select>
            </ListNav>


            {/* local para exibir os cards */}
            <CardsList>
                {
                    items.map((item) => (
                        <CardsItem key={item.id}>

                            <Link to={`/detalhes/${category}/${item.id}`}>

                                <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}/>
                                    <CardContent>
                                        <h2>{category === 'movie' ? item.title : item.name}</h2>
                                        <h3>Ano: { category === 'movie' ? item.release_date.substring(0,4) : item.first_air_date.substring(0,4)}</h3>
                                        <span><img src={star}/> {item.vote_average}</span>
                                    </CardContent>
                            </Link>
                            
                        </CardsItem>
                    ))
                }
            </CardsList>
        </div>
    )
}