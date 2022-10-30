import styled from "@emotion/styled"
import { text_20, text_53 } from "../../../theme/typography"
import Underline from "../../../assets/png/hero-underline-1.png"
const HeroStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column-reverse;
padding-top:50px;
padding-bottom:50px;
@media (min-width: 992px) {
    flex-direction: row;
}

.hero-underline-shape{
    background-image:url(${Underline});
    display: inline-block;
    padding-bottom: 1%;
    background-position-x: 40%;
    background-size: 116%;
    background-position-y: 41%;
    background-repeat: no-repeat;
}
`

HeroStyled.Item = styled.div`
width: 100%;

&.hero-image{
    @media(max-width:991px){
        max-width:300px;
    }
    @media(max-width:575px){
        display:none;
    }
}
@media (min-width: 992px) {
    width: 50%;  
}

&.hero-text {
    @media (min-width: 576px) {
        text-align: center;
    }
    @media (min-width: 992px) {
        text-align: left;
    }
    h2{
        ${text_53};
        margin-bottom:23px;
    }
    p{
        ${text_20};
    }
}


`

export default HeroStyled