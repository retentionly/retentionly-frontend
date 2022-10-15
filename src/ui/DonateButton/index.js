import { Button } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

const DonateButtonStyled = styled(Button)`
background: #F6C5C5;
color: #000000;
border-radius: 0;
padding: 30px 67px;
font-size: 20px;
font-weight: 500;
margin: 20px 0;
&:hover{
    background: #F6D5D9;
}
`

const DonateButton = (url) => {
    return (
        <DonateButtonStyled>
           <a href={url}> Donate Now </a>
        </DonateButtonStyled>
    )
}

export default DonateButton