import { Box, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { Text20 } from '../../theme/text'

const TextBoxStyled = styled(Box)`
margin-bottom: 20px;
input {
    width: 100%;
    border: 2px solid black;
    outline: none;
    min-height: 60px;
    color: #000;
    padding: 10px;
}
`

const RegularTextbox = ({ title, placeholder, state, handleChange }) => {
    return (
        <TextBoxStyled>
            <Text {...Text20} bg="black" p="10px" textAlign="center">{title}</Text>
            <input type="text" value={state} onChange={handleChange} placeholder={placeholder} />
        </TextBoxStyled>
    )
}

export default RegularTextbox