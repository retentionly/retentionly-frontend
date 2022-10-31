import React from 'react'
import mailIcon from "../../../assets/png/envelope.png"
import logo from "../../../assets/png/logo3.png"
import Container from '../Global/Container'
import { CtaFormContainer, FooterContentMain, FooterStyled } from './style'

const Footer = () => {
    return (
        <FooterStyled>
            <Container>
                <div>
                    <img src={logo} alt="" />
                </div>
                <FooterContentMain>
                    <CtaFormContainer>
                        <div>
                            <button>Book A Demo</button>
                            <input type="text" />
                        </div>
                        <p>Remember it's free to book a demo and there's no pressure to buy.</p>
                    </CtaFormContainer>
                    <div>
                        <div>
                            <img src={mailIcon} alt="" />
                            <p>For all inquiries email us at
                                hello@retentionaly.co.uk</p>
                        </div>
                        <div>
                            <img src={mailIcon} alt="" />
                            <p>For all inquiries email us at
                                hello@retentionaly.co.uk</p>
                        </div>
                    </div>
                </FooterContentMain>
                <div>
                    <p>© 2021. All rights reserved.</p>
                </div>
            </Container>
        </FooterStyled>
    )
}

export default Footer