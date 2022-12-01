import React from 'react'
import logo from "../../../assets/png/stat4.png"
import Typography from '../../../container/Sales/Global/Typography/Typography'
import { text_22 } from '../../../theme/typography'
import TestimonialContent, { TestimonialCardStyled, TestimonialMedia } from './style'

const TestimonialCard = ({ data }) => {

  // const { media, heading, text, designation, icon } = data;

  return (
    <TestimonialCardStyled>
      <TestimonialMedia>
        <img src="https://www.babseacle.org/wp-content/uploads/2018/09/portrait-square-10.jpg" alt="testimonial" />
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
              - John Doe, CEO
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