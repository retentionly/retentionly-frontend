import React from 'react'
import icon from "../../../assets/png/Icon.png"
import logo from "../../../assets/png/testimonial-logo.png"
import Typography from '../../../container/Sales/Global/Typography/Typography'
import { text_22 } from '../../../theme/typography'
import TestimonialContent, { TestimonialCardStyled, TestimonialMedia } from './style'

const TestimonialCard = ({ data }) => {

  return (
    <TestimonialCardStyled>
      <TestimonialMedia>
        <img src={icon} alt="testimonial" />
      </TestimonialMedia>
      <TestimonialContent>
        <TestimonialContent.Heading>
          <Typography as="h1">"I love Retentionly"</Typography>
        </TestimonialContent.Heading>
        <TestimonialContent.Text>
          <Typography variant={text_22}>
            <span>
              Retentionly has allowed us to finally steward our donors in an easy but effective way. I love Retentionly.
            </span>
            <span className='designation'>
              - Azad Hussian, CEO
            </span>
          </Typography>
        </TestimonialContent.Text>
        <TestimonialContent.Icon>
          <img src={logo} alt="" />
        </TestimonialContent.Icon>
      </TestimonialContent>
    </TestimonialCardStyled>
  )
}

export default TestimonialCard