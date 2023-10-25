import styled from "styled-components";
import background from '../../images/background.jpg';

export const BannerStyle = styled.div`

    background-image: url(${background});
    padding: 135px 0;
    text-align: center;
    color: #fff;

    h1 {
        font-size: 48px;
    }

    p{
        font-size: 18px;
        max-width: 460px;
        margin: 0 auto;
    }

`