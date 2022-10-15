import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Field } from "formik";

export const LinkText = styled.a`
  text-decoration:underline;
  font-weight:600;
`

export const InputContainer = styled(Box)`
margin-bottom: 16px;
`

export const InputDivStyled = styled(Box)`
background-color: #2b2b2b;
color: #fff;
padding: 19px 22px;
display: flex;
font-size: 25px;
margin-bottom: 2px;
`

export const InputStyled = styled(Field)`
background-color: #2b2b2b;
color: #fff;
width: 100%;
outline: none;

&::placeholder {
  color: #dbdbdb
}
`

export const ErrorMessageBox = styled(Box)`
margin-bottom: 10px;
span {
  color: red;
  font-weight: 500;
}
`