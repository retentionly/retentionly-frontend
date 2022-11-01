import React from 'react'
import { text_22, text_30 } from '../../../theme/typography'
import Container from '../Global/Container'
import Typography from '../Global/Typography'
import PricingCard from './PricingCard'
import { PricingStyled } from './style'

const data = [
    {
        title: 'Small',
        description: 'This is perfect if you’re a small charity with only a few supporters.',
        price: '£40/month',
    },
    {
        title: 'Medium',
        description: "If you're a charity with less than 5,000 supporters: this is for you.",
        price: '£200/month',
    },
    {
        title: 'Large',
        description: 'This is for charities with up to 10,000 donors.',
        price: '£400/month',
    },
]

const Pricing = () => {
    return (
        <PricingStyled>
            <Container>
                <div className="section-title">
                    <Typography as="h2" variant={text_30} className="faq-title" align="center">
                        <span className="underline-shape-v2">Pricing</span>
                    </Typography>
                    <Typography as="p" variant={text_22} className="faq-text" align="center">
                        This sounds great. But how much will it really cost you?
                    </Typography>
                </div>
                <div className="pricing-cards">
                    {
                        data.map((item) => <PricingCard data={item}/>)
                    }
                </div>
            </Container>
        </PricingStyled>
    )
}

export default Pricing