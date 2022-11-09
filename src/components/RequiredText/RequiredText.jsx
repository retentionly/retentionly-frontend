import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import ExclamationIcon from "../../assets/png/exclamation-mark.png"

const RequiredTextStyled = styled.div(({m}) => (`
display: flex;
align-items: center;
color: red;
font-weight: 500;
margin: ${m || '10px 0 0 0'};

img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
}
`))

const RequiredText = ({ text, m }) => {
  return (
    <RequiredTextStyled m={m}>
        <img src={ExclamationIcon} alt="" />
        <Text>{text || 'This Is A Required Field'}</Text>
    </RequiredTextStyled>
  )
}

export default RequiredText