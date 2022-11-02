import styled from "@emotion/styled"
import Underline from "../../../assets/png/hero-underline-1.png"
import { text_20, text_53 } from "../../../theme/typography"

const HeroStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column-reverse;
padding-top:20px;

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
    display: block;
    
    @media(max-width:575px){
        display: none;
    }

    @media(max-width:991px){
        display: none;
    }

}
@media (min-width: 992px) {
    width: 50%;  
}

&.hero-text {
    max-width: 350px;
    text-align: center;

    .underline-shape {
        display: block;
       }
 
    @media (min-width: 992px) {
        text-align: left;
        max-width: 100%;
    }
    h2{
        ${text_53};
        margin-bottom:23px;
        text-align: left;
    }
    p{
        ${text_20};
        text-align: left;
    }
}


`

export default HeroStyled