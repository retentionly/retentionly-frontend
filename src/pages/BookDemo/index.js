import styled from '@emotion/styled'
import React from 'react'
import { RegulerTestimonial } from '../../components/Testimonial'
import Brands from '../../container/BookDemo/Brands'
import DemoHero from '../../container/BookDemo/DemoHero'
import Footer from '../../container/Sales/Footer'

const BookDemoContainer = styled.div``

const BookDemo = () => {
    return (
        <BookDemoContainer>
            <DemoHero />
            <Brands />
            <RegulerTestimonial />
            <Footer />
        </BookDemoContainer>
    )
}

export default BookDemo