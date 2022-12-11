import React from 'react'
import { text_22, text_30 } from '../../../theme/typography'
import Container from '../Global/Container'
import Typography from '../Global/Typography'
import CardPrice from './CardPrice'
import PricingCard from './PricingCard'
import { PricingStyled } from './style'

const data = [
    {
        title: 'Small',
        description: 'This is perfect if you’re a small charity with only a few supporters.',
        price: '£40/month',
        perks: [
            '1 donor journey',
            'Message up to 1,000 donors per month',
            'Email support'
        ]
    },
    {
        title: 'Medium',
        description: "If you're a charity with less than 5,000 supporters: this is for you.",
        price: '£200/month',
        perks: [
            '1 donor journey',
            'Message up to 5,000  donors per month',
            'Email support'
        ]
    },
    {
        title: 'Large',
        description: 'This is for charities with up to 10,000 donors.',
        price: '£400/month',
        perks: [
            '1 donor journey',
            'Message up to 10,000 donors per month',
            '1:1 support',
            'Unlimited edits'
        ]
    },
]

const Pricing = () => {
    return (
        <PricingStyled id='pricing'>
            <Container>
                <div className="section-title">
                    <Typography as="h2" variant={text_30} className="faq-title" align="center">
                        <span className="underline-shape-v2">Pricing</span>
                    </Typography>
                    <Typography as="p" variant={text_22} className="faq-text" align="center">
                        This sounds great. But how much will it really cost you?
                    </Typography>
                </div>
                {/* <div className="pricing-cards">
                    {
                        data.map((item) => <PricingDetails data={item} />)
                    }
                </div> */}
                <div className="pricing-cards">
                    <PricingCard/>
                    <CardPrice/>
                </div>
                <div className='pricing-footer'>
                    <Typography variant={text_22}>
                        If you have more than 10,000 supporters then we will create a custom bundle for you. Please book a demo call to learn more.
                    </Typography>
                </div>
            </Container>
        </PricingStyled>
    )
}

export default Pricing