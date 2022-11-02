import styled from "@emotion/styled";

export const BrandStyled = styled.div`
.brand-section-title {
    br {
        display: none;
        @media (min-width: 768px) {
            display: block;
        }
    }
}
`

export const BrandContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
margin-top: 30px;

.brand {
    width: 120px;

    @media (min-width: 768px) {
        width: 150px;
    }
}


`