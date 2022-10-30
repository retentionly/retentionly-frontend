import styled from '@emotion/styled'
import React from 'react'
import { text_30 } from '../../../../theme/typography'
import Underline from "../../../../assets/png/hero-underline-1.png"
import Underline2 from "../../../../assets/png/hero-underline.png"
const TypographyStyled = styled.p`
${({variant}) => variant ? variant: text_30};
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
  background-image:url(${Underline2});
  display: inline-block;
  padding-bottom: 1%;
  background-position-x: 40%;
  background-size: 116%;
  background-position-y: 41%;
  background-repeat: no-repeat;
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