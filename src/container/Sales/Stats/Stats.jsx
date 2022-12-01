import React from 'react'
import icon1 from "../../../assets/png/stat1.webp"
import icon2 from "../../../assets/png/stat2.webp"
import icon3 from "../../../assets/png/stat3.webp"
import { ReactComponent as ArrowIcon } from "../../../assets/svg/arrow-up.svg"
import Container from '../Global/Container'
import Typography from '../Global/Typography/Typography'
import StatSlider from './Slider/StatSlider'
import { StatsContainer, StatsStyled } from './style'

const data = [
        {
            text: "return on investment",
            title: "11.3",
            postfix: "X"
        },
        {
            text: "average donation value",
            title: "55",
            prefix: "£"
        },
        {
            text: <>Helping Households Under <br/> Great Stress</>,
            icon: icon1
        },
        {
            text: "new donors",
            title: "1160",
            prefix:<span className='arrow-icon'><ArrowIcon/></span>
        },
        {
            text: "facebook donations",
            title: "117",
            prefix: "£"
        },
        {
            text: "impressions",
            title: "507",
            postfix: "k"
        },
        {
            title: "87",
            prefix:<span className='arrow-icon'><ArrowIcon/></span>,
            text: "weekly acquisition",
        },
        {
            icon: icon2,
            text: "Do good, get fit.",
        },
        {
            title: "17",
            postfix:"P",
            text: "cost per click",
        },
        {
            title: "4.78",
            prefix: "£",
            text: "cost per acquisition",
        },
        {
            title: "46",
            postfix: "P",
            text: "cost per click",
        },
        {
            title: "8.28",
            postfix: "%",
            text: "conversion rate",
        },
        {
            icon: icon3,
            text: "Make The World A Better Place",
        },
        {
            title: "3.28",
            postfix: "%",
            text: "click-through rate",
        },
        {
            title: "55.6",
            postfix: "%",
            text: "increase in audience",
        },
]


const Stats = () => {
    return (
        <Container>
            <StatsStyled>
                <Typography align="center" as="h1">We'll let the results do the talking.</Typography>
                <StatsContainer>
                    <StatSlider data={data}></StatSlider>
                </StatsContainer>
            </StatsStyled>
        </Container>
    )
}

export default Stats


