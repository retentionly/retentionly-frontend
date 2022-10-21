import { Button } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

const DonateButtonStyled = styled("span")(({ link,disabled }) => (`
background: #000000;
color: #fff;
border-radius: 0;
height:50px;
display: inline-flex;
align-items: center;
justify-content: center;
font-size: 20px;
font-weight: 500;
margin: 20px 0;

transition:.4s;
cursor: ${disabled ? "not-allowed" : "pointer"};
&:hover{
    opacity:.8
}
a {
    pointer-events: ${link ? "all" : "none"};
    height:100%;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    padding-top:10px;
    padding-bottom:10px;
    padding-left:25px;
    padding-right:25px;
    justify-content: center;
}
`))

const DonateButton = ({ url }) => {

    const urlText = url[0]?.children[0]?.text;
    const link = urlText && (urlText?.includes("https://") ? urlText : `https://${urlText}`)
    // const link = "https://facebook.com";

    return (
        <DonateButtonStyled disabled={!link} link={link}>
            <a href={link} target="_blank" rel="noreferrer"> Donate Now </a>
        </DonateButtonStyled>
    )
}

export default DonateButton