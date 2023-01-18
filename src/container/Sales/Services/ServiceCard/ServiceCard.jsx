import React from 'react'
import bg from "../../../../assets/png/service-bg.png"
import { text_22, text_30 } from '../../../../theme/typography'
import Typography from '../../Global/Typography/Typography'
import ServiceCardStyled from '../style'

const ServiceCard = (item) => {
    const { media, title, text, rtl } = item

    return (
        <ServiceCardStyled>
            {
                rtl
                    ? <>
                        <ServiceCardStyled.Text className="service-text">
                            <Typography variant={text_30} as="h1">
                                <span className="underline-shape-v2">
                                    {title}
                                </span></Typography>
                            <Typography variant={text_22}>
                                {text}
                            </Typography>
                        </ServiceCardStyled.Text>
                        <ServiceCardStyled.Media image={bg} rtl={rtl} className="service-media">
                            <iframe width="364" height="647" src="https://www.youtube.com/embed/bOGyZZdMeWM" title="Why Retentionly?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        </ServiceCardStyled.Media>
                    </>
                    : <>
                        <ServiceCardStyled.Media image={bg} rtl={rtl} className="service-media">
                        <iframe width="980" height="551" src="https://www.youtube.com/embed/RGr2CPzH-mA?list=PLhgn2wgfAGYRNNufP0L86NXBX68YZGUco" title="How Retentionly works" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </ServiceCardStyled.Media>
                        <ServiceCardStyled.Text className="service-text">
                            <Typography variant={text_30} as="h1">
                                <span className="underline-shape-v2">
                                    {title}
                                </span></Typography>
                            <Typography variant={text_22}>
                                {text}
                            </Typography>
                        </ServiceCardStyled.Text>
                    </>
            }
        </ServiceCardStyled>
    )
}

export default ServiceCard