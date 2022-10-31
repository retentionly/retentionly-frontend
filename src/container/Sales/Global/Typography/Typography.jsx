import styled from '@emotion/styled'
import React from 'react'
import Underline from "../../../../assets/png/hero-underline-1.png"
import Underline2 from "../../../../assets/png/hero-underline.png"
import { text_30 } from '../../../../theme/typography'

const TypographyStyled = styled.p`
${({variant}) => variant ? variant: text_30};
text-align: ${({align}) => align ? align : ""};
.underline-shape{
  background-image:url(${Underline});
  display: inline-block;
  padding-bottom: 1%;
  background-position-x: 40%;
  background-size: 116%;
  background-position-y: 41%;
  background-repeat: no-repeat;
}
.underline-shape-v2{
  display: inline-block;
  padding-bottom: 1%;
  position:relative;
  z-index:1;
  &:before{
    content: "";
    position: absolute;
    background-image:url(${Underline2});
    background-position-x: 40%;
    -webkit-background-size: 116%;
    background-size: 100%;
    background-position-y: 40%;
    background-repeat: no-repeat;
    z-index: -1;
    width: 160%;
    left: -27%;
    top: 0;
    height: 110%;
  }
}
`

const Typography = ({ children, ...rest }) => {
  return (
    <TypographyStyled {...rest}>
        {children}
    </TypographyStyled>
  )
}

export default Typography