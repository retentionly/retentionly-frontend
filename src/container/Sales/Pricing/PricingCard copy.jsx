import React from 'react'
import { text_20, text_22, text_35 } from '../../../theme/typography'
import Button from '../Global/Button'
import Typography from '../Global/Typography'
import { CardStyled } from './style'

const PricingCard = ({ title, description, price }) => {

    return (
        <>
        <CardStyled>
            <div className="card-title">
                <Typography as="h3" variant={text_22}>
                    {title}
                </Typography>
                <Typography variant={text_20}>
                    {description}
                </Typography>
            </div>
            <div className="card-price">
                <Typography as="h3" variant={text_35}>
                    {price}
                </Typography>
                <Typography variant={text_22}>
                    *excluding VAT
                </Typography>
            </div>
            <div className='card-footer'>
                <Button to="/book-a-demo">Get Started</Button>
            </div>
        </CardStyled>
        </>
    )
}

export default PricingCard