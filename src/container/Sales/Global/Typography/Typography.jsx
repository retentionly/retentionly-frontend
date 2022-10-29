import styled from '@emotion/styled'
import React from 'react'
import { text_30 } from '../../../../theme/typography'

const TypographyStyled = styled.p`
${text_30}
`

const Typography = ({ children, ...rest }) => {
  return (
    <TypographyStyled {...rest}>
        {children}
    </TypographyStyled>
  )
}

export default Typography