import React from 'react'
import { text_22, text_30 } from '../../../theme/typography'
import Container from '../../Sales/Global/Container'
import Typography from '../../Sales/Global/Typography'
import DemoCalendly from './DemoCalendly'
import { DemoHeroStyled } from './style'

const DemoHero = () => {

  return (
    <DemoHeroStyled>
      <Container>
        <div className="section-title">
          <Typography as="h2" variant={text_30} className="faq-title" align="center">
            <span className="underline-shape-v2">Book A Free Demo</span>
          </Typography>
          <Typography as="p" variant={text_22} className="faq-text" align="center">
            Learn exactly how Retentionly can help you increase donor retention and <br /> get more donations out of your current donors.
          </Typography>
        </div>
      </Container>
     <DemoCalendly/>
    </DemoHeroStyled>
  )
}

export default DemoHero