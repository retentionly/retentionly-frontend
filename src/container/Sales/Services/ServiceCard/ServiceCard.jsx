import React from 'react'
import bg from "../../../../assets/png/service-bg.png"
import movie from "../../../../assets/video/movie.mp4"
import { text_22, text_30 } from '../../../../theme/typography'
import Typography from '../../Global/Typography/Typography'
import ServiceCardStyled from '../style'

const ServiceCard = ({ media, title, desc, rtl }) => {
    return (
        <ServiceCardStyled>
            {
                rtl
                    ? <>
                        <ServiceCardStyled.Text>
                            <Typography variant={text_30} as="h1">
                                <span className="underline-shape-v2">
                                    Why Retentionly?
                                </span></Typography>
                            <Typography variant={text_22}>We know it's hard to keep your donors. Most donors give once and never come back. But there is a way to make them stick around. But it takes a lot of time, effort and energy - until now.  </Typography>
                        </ServiceCardStyled.Text>
                        <ServiceCardStyled.Media image={bg} rtl={rtl}>
                            <video width="250" height="250" autoPlay>
                                <source src={movie} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                            {/* <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" className='service-image' /> */}
                        </ServiceCardStyled.Media>
                    </>
                    : <>
                        <ServiceCardStyled.Media image={bg} rtl={rtl}>
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" className='service-image' />
                        </ServiceCardStyled.Media>
                        <ServiceCardStyled.Text>
                            <Typography variant={text_30} as="h1">
                                <span className="underline-shape-v2">
                                    Why Retentionly?
                                </span></Typography>
                            <Typography variant={text_22}>We know it's hard to keep your donors. Most donors give once and never come back. But there is a way to make them stick around. But it takes a lot of time, effort and energy - until now.  </Typography>
                        </ServiceCardStyled.Text>

                    </>
            }
        </ServiceCardStyled>
    )
}

export default ServiceCard