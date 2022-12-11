import styled from "@emotion/styled";

export const PricingStyled = styled.div`
padding-top: 100px;
padding-bottom: 50px;
.pricing-cards {
    display: flex;
    justify-content: center;
    column-gap: 30px;
    margin: 40px 0 20px;
}
.pricing-footer {
    font-weight: 600;
    text-align: center;
}
`

export const PricingDetailsStyled = styled.div`
max-width: 300px;
min-width: 100%;
min-height: 350px;
margin-bottom: 30px;

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
@media (min-width: 992px) {
    max-width: 300px;
min-width: 300px;
}
`

export const CardStyled = styled.div`
border: 4px solid #000;
padding: 20px;
max-width: 600px;

.slider-range {
    margin: 20px 0;
    widht: 100%;
    accent-color: #FFC3C4;
    -webkit-appearance: none;

    &::-webkit-slider-runnable-track {
        background: #FFC3C4;
        height: 5px;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        background: black;
        border-radius: 50%;
        cursor: pointer;
        margin-top: -7px;
    }
}

.card-title {
    h2 {
        font-size: 1rem;
    }
    p {
        font-size: 1rem;
    }

    @media (min-width: 992px) {
        h2 {
            font-size: 2rem;
        }
        p {
            font-size: 26px;
        }
    }
}
.card-donor {
    .donor-value {
        font-size: 14px;

        @media (min-width: 992px) {
            font-size: 26px;
        }
    }
}

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
.card-price-mobile {
    display: none;

    @media (max-width: 992px) {
        display: block;
    }

    h2 {
        font-size: 4rem;
    }
}

`

export const CardPriceStyled = styled.div`
display: none;

@media (min-width: 992px) {
    display: block;
}

border: 4px solid #000;
padding: 20px;
max-width: 600px;

.card-title {
    h2 {
        font-size: 2rem;
        font-weight: 400 !important; 
    }
}
.card-price {
    h2 {
        font-size: 4rem;
    }
}
.card-footer {
    p {
        font-size: 1rem;
    }
}
`