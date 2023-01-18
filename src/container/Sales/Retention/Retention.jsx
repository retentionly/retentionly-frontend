import React from 'react'
import Container from '../Global/Container'
import Typography from '../Global/Typography'
import { RetenionBlock, RetentionItem } from './style'

const data = [
    {
        text: "more expensive to acquire a new <br/> donor than an existing donor",
        title: "25",
        postfix: "X"
    },
    {
        text: "of new donors never <br/> donate again ",
        title: "49",
        postfix: "%"
    },
    {
        text: "charities don't send an <br/> email after a donation is made",
        title: "39.3",
        postfix: "%"
    },
]

const Retention = () => {
    return (
        <Container>
            <Typography align="center" as="h1">Why is donor retention important?</Typography>
            <RetenionBlock>
                {data.map((item, index) => (
                    <RetentionItem key={index}>
                        <div>
                            <p className='retention-title'>
                                {item.title}
                                <span className='retention-postfix'>
                                    {item.postfix}
                                </span>
                            </p>
                        </div>
                        <Typography className="retention-text" as="p" dangerouslySetInnerHTML={{ __html: item.text }} />
                    </RetentionItem >
                ))}
            </RetenionBlock>
        </Container>
    )
}

export default Retention