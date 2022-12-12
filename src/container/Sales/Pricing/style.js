import styled from "@emotion/styled";

export const PricingStyled = styled.div`
padding-top: 100px;
padding-bottom: 50px;
.pricing-cards {
    display: flex;
    justify-content: center;
    align-items: flex-start;
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
padding: 20px 30px;
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
        font-size: 1.5rem;
    }
    p {
        font-size: 1rem;
    }

    @media (min-width: 992px) {
        h2 {
            font-size: 2rem;
        }
        p {
            font-size: 1.5rem;
        }
    }
}
.card-donor {
    .donor-value {
        margin-top: 20px;
        font-size: 1.5rem;

        @media (min-width: 992px) {
            font-size: 1.75rem;
        }
    }
}

.slider-container {
    margin-top: 20px;

    input {
        -webkit-appearance: none;
        height: 3px;
        background: #ddd;
        border-radius: 5px;
        background-image: linear-gradient(#FFC3C4, #FFC3C4);
        background-repeat: no-repeat;
        margin-top: 10px;
        width: 100%;
    }

    input::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 1rem;
        height: 1rem;
        background: #FFC3C4;
        border-radius: 50%;
        cursor: pointer;
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

    .cta-button {
        width: 100%;
    text-align: center;
    }
}

`

export const CardPriceStyled = styled.div`
display: none;

@media (min-width: 992px) {
    display: block;
}

border: 4px solid #000;
padding: 40px;
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
.footer-text {
    margin-top: 20px;
    display: flex;

    img {
        width: 100px;
        margin-left: -20px;
    }
    p {
        font-size: 1rem;
        font-weight: 600;
    }
}
`