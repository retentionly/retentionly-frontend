import styled from "@emotion/styled";

export const BenefitStyled = styled.div`
padding: 50px 0;
`

export const BenefitsContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;

@media (min-width: 992px){
    flex-direction: row;
}

img {
    max-width: 400px;
}

ul {
    list-style: none;

    li {
        margin-bottom: 10px;
        font-size: 22px;
    }
}
`