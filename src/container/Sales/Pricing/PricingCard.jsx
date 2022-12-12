import React from 'react';
import tick from '../../../assets/png/pricing-tick.png';
import { text_22 } from '../../../theme/typography';
import BookButton from '../Global/Button/Button';
import Typography from '../Global/Typography';
import { CardStyled } from './style';


const PricingCard = ({ title, description, price, setPrice }) => {
    // const [sliderValue, setSliderValue] = useState(0)

    const handleSliderChange = (e) => {
        setPrice(e.target.value)
    }

    const getBackgroundSize = () => {
        return { backgroundSize: `${(price * 100) / 10000}% 100%` }
    }

    const perks = [
        '1 donor journey',
        'Message up to 10,000 donors per month',
        '1:1 support',
        'Unlimited edits'
    ]

    return (
        <>
            <CardStyled>
                <div className="card-title">
                    <h2>{title || 'How many new donor do you have'}</h2>
                    <p>{description || 'We simply charge £1 per donor journey. So use the slider below and select how many new donors you want to reach out to. '}</p>
                </div>
                <div className="card-donor">
                    {/* <input className='slider-range' type="range" value={sliderValue} min={1} max={1000} onChange={handleSliderChange} /> */}
                    <div className="slider-container">
                        <input
                            type="range"
                            name='slider'
                            min={1}
                            max={10000}
                            value={price}
                            onChange={handleSliderChange}
                            style={getBackgroundSize()} />
                    </div>
                    <h3 className="donor-value">Number of new donors: {price}</h3>
                    <div className="card-price-mobile">
                        <h2>£{price}</h2>
                        <BookButton to="/book-a-demo" className="cta-button">Get Started</BookButton>
                    </div>

                </div>
                <div className="card-perks">
                    <ul>
                        {
                            perks.map((item) => <li className='perks'>
                                <span className="icon">
                                    <img src={tick} alt="" />
                                </span>
                                <Typography variant={text_22}>
                                    {item}
                                </Typography>
                            </li>)
                        }
                    </ul>
                </div>
            </CardStyled>
        </>
    )
}

export default PricingCard