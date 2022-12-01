import React, { useRef } from 'react'
import Slider from 'react-slick'
import arrowLeft from '../../../assets/png/left-chevron.png'
import arrowRight from '../../../assets/png/right-chevron.png'
import Container from '../../../container/Sales/Global/Container'
import { SliderArrowButton, SliderStyled, TestimonialStyled } from './style'
import TestimonialCard from './TestimonialCard'

const NextButton = ({ onClick }) => {
    return (
        <SliderArrowButton onClick={onClick}>
            <img src={arrowRight} alt="" />
        </SliderArrowButton>
    )
}

const PrevButton = ({ onClick }) => {
    return (
        <SliderArrowButton onClick={onClick}>
            <img src={arrowLeft} alt="" />
        </SliderArrowButton>
    )
}

const RegulerTestimonial = ({ data }) => {

    const settings = {
        dots: false,
        infinite: true,
        arrow: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: <NextButton />,
        prevArrow: <PrevButton />
    }

    const slider = useRef(null)

    return (
        <TestimonialStyled>
            <Container>
                <SliderStyled as={Slider} {...settings} ref={slider}>
                    <TestimonialCard />
                    <TestimonialCard />
                </SliderStyled>
            </Container>
        </TestimonialStyled>
    )
}

export default RegulerTestimonial