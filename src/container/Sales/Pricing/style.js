import styled from "@emotion/styled";

export const PricingStyled = styled.div`
padding-bottom: 50px;
.pricing-cards {
    display: flex;
    column-gap: 40px;
    margin: 40px 0;
}
`

export const CardStyled = styled.div`
max-width: 300px;
min-width: 300px;

border: 4px solid #000;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;

.card-title {
    margin-bottom: 10px;
    h3 {
        margin-bottom: 10px;
    }
}

.card-price {
    margin-bottom: 10px;
    h3 {
        margin-bottom: 5px;
    }
}

.card-footer {
    a {
        width: 100%;
        text-align: center;
    }
}
`