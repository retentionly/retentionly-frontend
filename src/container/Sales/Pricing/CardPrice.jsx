import React from 'react'
import safetySvg from "../../../assets/png/safety.png"
import BookButton from '../Global/Button/Button'
import { CardPriceStyled } from './style'

const CardPrice = ({ price }) => {
    return (
        <>
            <CardPriceStyled>
                <div className="card-title">
                    <h2>Total Price</h2>
                </div>
                <div className="card-price">
                    <h2>£{price}</h2>
                </div>
                <div className='card-footer'>
                    <BookButton to="/book-a-demo" className="cta-button">Get Started</BookButton>
                    <div className='footer-text'>
                        <img src={safetySvg} alt="" />
                        <p>
                            If you are not blown away by the results, we will refund you 100% of your money.
                        </p>
                    </div>

                </div>
            </CardPriceStyled>
        </>
    )
}

export default CardPrice