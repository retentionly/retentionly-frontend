import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const PageWrapper = styled(Box)`
    min-height:${p => p.minH ?? "100vh"};
    padding-top:70px;
    padding-bottom:70px;
    ${p => p.center && `
        display:flex;
        align-items:center;
        justify-content:center;
        &>div{
            width:100%;
        }
    `}
`