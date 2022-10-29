import React from 'react'
import icon1 from "../../../assets/png/stat1.webp"
import icon2 from "../../../assets/png/stat2.webp"
import icon3 from "../../../assets/png/stat3.webp"
import Container from '../Global/Container'
import Typography from '../Global/Typography/Typography'
import StatSlider from './Slider/StatSlider'
import { StatsContainer, StatsStyled } from './style'

const data = [
    [
        {
            text: "return on investment",
            title: "11.3",
            sub: "X"
        },
        {
            text: "average donation value",
            title: "11.3",
            sub: "X"
        },
        {
            text: "Helping Households Under Great Stress",
            icon: icon1
        },
        {
            text: "new donors",
            title: "11.3",
            sub: "X"
        },
        {
            text: "facebook donations",
            title: "11.3",
            sub: "X"
        },
    ],
    [
        {
            text: "return on investment",
            title: "11.3",
            sub: "X"
        },
        {
            text: "average donation value",
            title: "11.3",
            sub: "X"
        },
        {
            text: "Helping Households Under Great Stress",
            icon: icon2
        },
        {
            text: "new donors",
            title: "11.3",
            sub: "X"
        },
        {
            text: "facebook donations",
            title: "11.3",
            sub: "X"
        },

    ],
    [
        {
            text: "return on investment",
            title: "11.3",
            sub: "X"
        },
        {
            text: "average donation value",
            title: "11.3",
            sub: "X"
        },
        {
            text: "Helping Households Under Great Stress",
            icon: icon3
        },
        {
            text: "new donors",
            title: "11.3",
            sub: "X"
        },
        {
            text: "facebook donations",
            title: "11.3",
            sub: "X"
        },

    ],
]

const Stats = () => {
    return (
        <Container>
            <StatsStyled>
                <Typography as="h1">We'll let the results do the talking.</Typography>
                <StatsContainer>
                    <StatSlider data={data}></StatSlider>
                </StatsContainer>
            </StatsStyled>
        </Container>
    )
}

export default Stats