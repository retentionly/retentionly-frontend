
import React from 'react'
import Button from '../Global/Button'
import Container from '../Global/Container'
import ServiceCard from './ServiceCard/ServiceCard'
import { SeriviceCardContainer, ServiceStyled } from './style'

const data = [
    {
        title: "Why Retentionly? ",
        text: "We know it's hard to keep your donors. Most donors give once and never come back. But there is a way to make them stick around. But it takes a lot of time, effort and energy - until now.  ",
        media: "",
        rtl: true
    },
    {
        title: "How it works",
        text: "We provide proven pre-built donor journeys - all you have to do is fill it in. These donor journeys are made up of several emails. The purpose of these emails is to retain your donors and inspire them to give again.",
        media: "",
        rtl: false
    }
]

const Services = () => {
    return (
        <ServiceStyled id='why-retentionly'>
            <Container>
                <SeriviceCardContainer>
                    <ServiceCard rtl={true} />
                    <ServiceCard />
                </SeriviceCardContainer>
                <Button className="cta-button">Book A Demo</Button>
            </Container>
        </ServiceStyled>
    )
}

export default Services