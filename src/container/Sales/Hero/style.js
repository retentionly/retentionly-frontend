import styled from "@emotion/styled"
import { text_20, text_53 } from "../../../theme/typography"

const HeroStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

@media (min-width: 992px) {
    flex-direction: row;
}
`

HeroStyled.Item = styled.div`
width: 100%;

@media (min-width: 992px) {
width: 50%;
}

.hero-text {
    text-align: center;

    @media (min-width: 992px) {
        text-align: left;
    }
    h2 {
        ${text_53}
        
    }
    p {
        ${text_20}
    }
}

button {
    background: #FFC3C4;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: 600;
    margin: 20px auto 0;

    @media (min-width: 992px) {
        margin: 20px 0 0;
    }
}
`

export default HeroStyled