import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";


export const PreviewFrame = styled.div`
    position: sticky;
    top: 20px;
    background:#D9D9D9;
    padding-left:30px;
    padding-right:30px;
    padding-bottom:30px;
`


export const MainTextBoxStyle = styled.div`
    [role="textbox"]{
        min-height:446px!important;
    }
`

export const EditBlockStyled = styled(Flex)`

    &.email-2{
        .upload{
            order:1;
        }
        .subject-line{
            order:2;
        }
        .preview{
            order:3;
        }
        .impact-statistic{
            order:4;
        }
        .donation-for{
            order:5;
        }
        .money-goes{
            order:6;
        }
    }
    
`
