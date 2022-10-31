import React from 'react'
import mailIcon from "../../../assets/png/envelope.png"
import instagramIcon from "../../../assets/png/instagram.png"
import linkedinIcon from "../../../assets/png/linkedin.png"
import logo from "../../../assets/png/logo3.png"
import twitterIcon from "../../../assets/png/twitter.png"
import { text_22 } from '../../../theme/typography'
import Button from '../Global/Button'
import Container from '../Global/Container'
import Typography from '../Global/Typography/Typography'
import { CtaForm, CtaFormContainer, CtaInfo, CtaInfoContainer, CtaInfoIcon, FooterContentMain, FooterCopyright, FooterLogo, FooterStyled, FormInput } from './style'

const Footer = () => {
    return (
        <FooterStyled>
            <Container>
                <FooterLogo>
                    <img src={logo} alt="" />
                </FooterLogo>
                <FooterContentMain>
                    <CtaFormContainer>
                        <CtaForm>
                            <Button>Book A Demo</Button>
                            <FormInput type="text" placeholder='Enter Email Address' />
                        </CtaForm>
                        <Typography variant={text_22}>Remember it's free to book a demo <br /> and there's no pressure to buy.</Typography>
                    </CtaFormContainer>
                    <CtaInfoContainer>
                        <CtaInfo>
                            <CtaInfoIcon>
                                <img src={mailIcon} alt="" />
                            </CtaInfoIcon>
                            <Typography variant={text_22} align="right">For all inquiries email us at <br />
                                hello@retentionaly.co.uk</Typography>
                        </CtaInfo>
                        <CtaInfo>
                            <CtaInfoIcon>
                                <a href="https://facebook.com">
                                    <img src={twitterIcon} alt="" />
                                </a>
                                <a href="https://facebook.com">
                                    <img src={linkedinIcon} alt="" />
                                </a>
                                <a href="https://facebook.com">
                                    <img src={instagramIcon} alt="" />
                                </a>
                            </CtaInfoIcon>
                            <Typography variant={text_22} align="right">Keep connected <br />
                                on socials!</Typography>
                        </CtaInfo>
                    </CtaInfoContainer>
                </FooterContentMain>
                <FooterCopyright>
                    <Typography align="center">© Copyright 2022. CerealBox Limited. <br />
                        All Rights Reserved. Our Privacy Policy.
                    </Typography>
                </FooterCopyright>
            </Container>
        </FooterStyled>
    )
}

export default Footer