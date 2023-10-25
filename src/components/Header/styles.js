import styled from "styled-components";

export const HeaderStyle = styled.div `

    background-color: #000715;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;  
    
    @media (max-width: 640px) {
        flex-direction: column;
        row-gap: 20px;
    }
    
    nav{
        display: flex;
        column-gap: 80px;

        a{
            color: #ffffff;
            text-decoration: none;
        }

    }    
`