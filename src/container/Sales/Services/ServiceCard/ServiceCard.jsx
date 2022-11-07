import React from 'react'
import bg from "../../../../assets/png/service-bg.png"
import { text_22, text_30 } from '../../../../theme/typography'
import Typography from '../../Global/Typography/Typography'
import ServiceCardStyled from '../style'

const ServiceCard = (item) => {
    const { media, title, text, rtl } = item
    console.log(item)
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
                            <iframe src="https://www.youtube.com/embed/91BUM3WhCfo" title="Dolby Presents: The World Of Sound | Demo | Dolby Atmos | Dolby" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                           
                        </ServiceCardStyled.Media>
                    </>
                    : <>
                        <ServiceCardStyled.Media image={bg} rtl={rtl} className="service-media">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" className='service-image' />
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