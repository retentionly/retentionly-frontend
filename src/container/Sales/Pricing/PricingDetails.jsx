import React from 'react';
import tick from '../../../assets/png/pricing-tick.png';
import { text_22 } from '../../../theme/typography';
import Typography from '../Global/Typography';
import PricingCard from './PricingCard';
import { PricingDetailsStyled } from './style';

const PricingDetails = ({ data }) => {
    const { title, description, price, perks } = data;
    return (
        <PricingDetailsStyled>
            <PricingCard title={title} description={description} price={price} />
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
        </PricingDetailsStyled>
    )
}

export default PricingDetails