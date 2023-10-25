import styled from "styled-components";

export const BannerDetalhes = styled.div`
    height: 500px;
    background-image: url(${(props => props.url)});
    background-size: cover; 
    background-attachment: fixed;
    background-position: center;
`
export const Content = styled.div`
    max-width: 850px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.50);
    backdrop-filter: blur(11.5px);
    color: white;
    margin: 0 auto; 
    position: relative;
    top: -250px;
    padding: 30px;

    display: flex;
    align-items: center;
    gap: 30px;

    ul {
        list-style-position: inside;
        margin: 15px 0;
    }

    p {
        margin-bottom: 15px;
    }

    button {
        background-color: #000E2A;
        color: white;
        border: none;
        padding: 10px 40px;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            background-color: #00b1e9;
        }
    }

    @media (max-width: 850px){
        flex-direction: column;

        img{
            margin-bottom: 20px;
        }
        
    }
`
