import styled from "@emotion/styled";

export const PricingStyled = styled.div`
padding-bottom: 50px;
.pricing-cards {
    display: flex;
    column-gap: 40px;
    margin: 40px 0;
}
`

export const PricingDetailsStyled = styled.div`

.card-perks {
    margin-top: 20px;
}

.perks {
    display: flex;
    margin-bottom: 10px;
    font-weight: 500;

    .icon {
        width: 30px;
        margin-right: 10px;

        img {
            min-width: 30px;
        }
    }


}
`

export const CardStyled = styled.div`
max-width: 300px;
min-width: 300px;
min-height: 350px;
max-height: 350px;

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