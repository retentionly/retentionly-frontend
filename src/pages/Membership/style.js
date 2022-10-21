import { Box, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const CheckoutBox = styled(Box)`
    
`
export const TextStyled = styled(Text)`
  font-size: 20px;
  line-height: 1.2;
  @media (min-width:768px){
    font-size: 30px;
  }
`
export const SecureText = styled(TextStyled)`
display: flex;
align-items: center;
`

