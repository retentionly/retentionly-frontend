import { Box, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { Field } from 'formik'
import React from 'react'

const InputDivStyled = styled(Box)`
background-color: #2b2b2b;
color: #fff;
padding: 19px 22px;
display: flex;
font-size: 25px;
margin-bottom: ${p => p.mb ?? '10px'}
`

const InputStyled = styled(Field)`
background-color: #2b2b2b;
color: #fff;
width: 100%;
outline: none;
&::placeholder {
  color: #dbdbdb
}
`

const Input = ({ placeholder, onChange, value, attrs, wrapper, inputError }) => {
  return (
    <InputDivStyled {...wrapper}>
        <InputStyled onChange={onChange} value={value} placeholder={placeholder} {...attrs}/>
        {inputError && <Text h="10" color="#ff0000">{inputError}</Text>}
    </InputDivStyled>
  )
}

export default Input