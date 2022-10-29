import React from 'react'
import Typography from '../../Global/Typography/Typography'
import { SliderItemStyled, StatItem } from '../style'

const SliderItem = ({ data }) => {
    console.log(data)
    return (
        <SliderItemStyled>
            {
                data.map((item, index) => (
                    <StatItem>
                        {
                            item.icon
                                ? <img className='stat-icon' src={item.icon} alt="icon" />
                                : <div>
                                    <Typography className="stat-item-title" as={'h1'}>{item.title}<span>{item.sub}</span></Typography>
                                </div>
                        }
                        <Typography className="stat-item-text">{item.text}</Typography>
                    </StatItem>))
            }
        </SliderItemStyled>
    )
}

export default SliderItem