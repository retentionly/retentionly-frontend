import React from 'react';
import tick from '../../../assets/png/pricing-tick.png';
import { text_22 } from '../../../theme/typography';
import Typography from '../Global/Typography';
import { CardStyled } from './style';

const PricingCard = ({ title, description, price }) => {
    const [sliderValue, setSliderValue] = React.useState(0)

    const handleSliderChange = (e) => {
        setSliderValue(e.target.value)
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
                    <input className='slider-range' type="range" value={sliderValue} min={1} max={1000} onChange={handleSliderChange} />
                    <div className="card-price-mobile">
                        <h2>£70</h2>
                    </div>
                    <h3 className="donor-value">Number of new donors: {sliderValue}</h3>
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