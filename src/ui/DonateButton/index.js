import { Button } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

const DonateButtonStyled = styled(Button)(({ link }) => (`
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
a {
    pointer-events: ${link ? "all" : "none"};
}
`))

const DonateButton = ({ url }) => {

    const urlText = url[0]?.children[0]?.text;
    const link = urlText && (urlText?.includes("https://") ? urlText : `https://${urlText}`)

    return (
        <DonateButtonStyled disabled={!link} link={link}>
            <a href={link} target="_blank" rel="noreferrer"> Donate Now </a>
        </DonateButtonStyled>
    )
}

export default DonateButton