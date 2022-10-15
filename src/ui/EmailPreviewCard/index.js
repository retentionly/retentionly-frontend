import { Box, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

const PreviewCard = styled(Box)`
text-align: center;
margin-bottom: 40px;
font-size: 24px;
border: 2px solid black;
`

const PreviewHeading = styled(Text)`
    background: black;
    padding: 15px;

`

const PreviewContentBox = styled(Box)`
padding: 15px 10px;
color: black;
`

const EmailPreviewCard = ({ title, value }) => {

    return (
        <PreviewCard>
            <PreviewHeading>{title}</PreviewHeading>
            <PreviewContentBox>
                <Text>
                    {value || 'Nothing Inserted'}
                </Text>
            </PreviewContentBox>
        </PreviewCard>
    )
}

export default EmailPreviewCard