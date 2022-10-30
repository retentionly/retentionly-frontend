import React from 'react'
import Typography from '../../Global/Typography/Typography'
import { StatItem } from '../style'

const SliderItem = ({ data }) => {
    const {icon,prefix,title,text,postfix} = data;
    return (
        
            <StatItem>
                {
                    icon
                        ? <img className='stat-icon' src={icon} alt="icon" />
                        : <div>
                            <Typography className="stat-item-title" as={'h1'}>{prefix &&<span className='prefix'>{prefix}</span>}{title}{postfix &&<span className='post-fix'>{postfix}</span>}</Typography>
                        </div>
                }
                <Typography className="stat-item-text">{text}</Typography>
            </StatItem>
    )
}

export default SliderItem