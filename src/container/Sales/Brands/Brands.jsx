import React from 'react';
import brand1 from "../../../assets/png/stat1.webp";
import brand2 from "../../../assets/png/stat2.webp";
import brand3 from "../../../assets/png/stat3.webp";
import brand4 from "../../../assets/png/stat4.png";
import brand5 from "../../../assets/png/stat5.png";
import Container from '../Global/Container';
import Typography from '../Global/Typography/Typography';
import { BrandContainer, BrandStyled } from './style';

const brands = [
    {
        src: brand1,
    },
    {
        src: brand2,
    },
    {
        src: brand3,
    },
    {
        src: brand4,
    },
    {
        src: brand5,
    },
]

const Brands = () => {
    return (
        <BrandStyled>
            <Container>
                <Typography align="center" as="h1" className="brand-section-title">
                    We've helped them keep their donors. <br />
                    Now can we help you?
                </Typography>
                <BrandContainer>
                    {
                        brands.map((brand, index) => (
                            <div key={index} className="brand">
                                <img src={brand.src} alt="brand-icon" />
                            </div>
                        ))
                    }
                </BrandContainer>
            </Container>
        </BrandStyled>
    )
}

export default Brands