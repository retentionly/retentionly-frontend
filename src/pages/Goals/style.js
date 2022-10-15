import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const SingleOption = styled(Box)`
    display:flex;
    align-items:center;
    ${p => p.disabled && "pointer-events:none;"}
    label{
        width: 100%;
        // width:calc(100% - 75px);
        // margin-right:25px;
        ${p => p.disabled && "opacity:.4;background:#000;color:#fff;border-radius:var(--chakra-radii-md)"}
    }
    svg{
        max-width:55px;
        ${p => p.disabled && "pointer-events:none;opacity:.4;"}
    }
    ${p => p.disabled && "cursor:not-allowed;"}
`
