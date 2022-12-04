import styled from "@emotion/styled";

export const BenefitStyled = styled.div`
padding-top: 50px;
`

export const BenefitsContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
text-align: center;

@media (min-width: 992px){
    flex-direction: row;
    text-align: left;
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

    @media (max-width: 992px){
        margin-top : 30px;

        li {
            font-size: 18px;
        }
    }
}

.benefit-section-image {
    display: none;
    @media (min-width: 992px){
        display: block;
    }
}
`