import { List } from "../../components/List";
import { Banner } from "../../components/Banner";


export function Filmes(){

    return(
        <>
            <Banner title ='Filmes' />
            <List category='movie' />
        </>
    )
}