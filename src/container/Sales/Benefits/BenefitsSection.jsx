import React from 'react'
import benefit from "../../../assets/png/benefit.png"
import { text_22, text_30 } from '../../../theme/typography'
import Container from '../Global/Container'
import Typography from '../Global/Typography'
import { BenefitsContainer, BenefitStyled } from './style'

const BenefitsSection = () => {
    return (
        <BenefitStyled>
            <Container>
                <div className="section-title">
                    <Typography as="h2" variant={text_30} className="faq-title" align="center">
                        <span className="underline-shape-v2">Benefits</span>
                    </Typography>
                    <Typography as="p" variant={text_22} className="faq-text" align="center">
                        Take your fundraising income to the next level by using Retentionly.
                    </Typography>
                </div>
                <BenefitsContainer>
                    <div className='benefit-section-image'>
                        <img src={benefit} alt="" />
                    </div>
                    <div>
                        <ul>
                            <li>🤑 Get more donations from your current donors.</li>
                            <li>📆 Convert your one-off donors into monthly givers.</li>
                            <li>❤️ Turn your subscribers into donors.</li>
                            <li>🏆 Win back old donors.</li>
                            <li>📈 Increase the Lifetime Value of all of your donors.</li>
                        </ul>
                    </div>
                </BenefitsContainer>
            </Container>
        </BenefitStyled>
    )
}

export default BenefitsSection