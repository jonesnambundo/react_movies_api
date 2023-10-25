import styled from "styled-components";

export const ListNav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

input {
    padding: 5px 10px;
    margin-top: 10px;
}

select {
    padding: 5px 10px;
    width: 200px;
    margin-top: 10px;
}
`
// lista de card
export const CardsList = styled.div`
display: flex;
flex-wrap: wrap;
gap: 30px;
margin: 60px 0;
justify-content: center;
`
//cada card 
export const CardsItem = styled.div`
    max-width: 360px;
    position: relative; // para servir de referencia ao absolute

    img {
        border-radius: 10px;
        opacity: 0.7;

        &:hover {
            opacity: 1;
        }
    }
`
export const CardContent = styled.div`
    position: absolute; //posição em relação ao elemento pai (desde que ele tenha position)
    bottom: 15px;
    left: 15px;
    color: #fff;
    text-shadow: 1px 1px 1px black; //sombra horizontal , vertical , suavidade e cor 
    pointer-events: none;

    h2{
        font-size: 24px;
    }
    h3{
        font-size: 16px;
    }

    span{
        font-size: 16px;
        font-weight: bold;
        color: #faff00;
    }
`
