import { Text } from "@chakra-ui/react"
import styled from "@emotion/styled"

export default function PreviewFooter({style}){
    return(
        <PreviewFooterStyled {...style}>
            <Text>
                Copyright © 2020, Al Isharah, All rights reserved.
            </Text>
            <Text>Our mailing address is:
                info@alisharah.com
            </Text>
            <Text>
                Want to change how you receive these emails?
                You can update your preferences or unsubscribe from this list.
            </Text>
        </PreviewFooterStyled>
    )
}

export const PreviewFooterStyled = styled.div`
text-align:center;
padding: 32px 43px 35px;
border-top:1px solid #000;
margin:20px 10px 0;
p{
    font-size:15px;
    margin-bottom:15px;
    line-height:1.4
}
`