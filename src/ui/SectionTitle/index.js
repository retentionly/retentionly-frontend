import { Box} from "@chakra-ui/react"
import styled from "@emotion/styled"
// import { Text30,Text65 } from "../../theme/text"

export const Title = styled.h2`
    line-height: 1.2461538461538462;
    margin-bottom:32px;
    font-size: 42px;
    @media (min-width:768px){
        font-size: 65px;
    }
`
export const Paragraph = styled.p`
    fontWeight: 400;
    line-height:1.2;
    font-size: 20px;
    @media (min-width:768px){
        font-size: 30px;
    }
`

export default function SectionTitle({title,icon,text,...rest}){
    return(
        <Box {...rest} textAlign="center">
            <Title >
                {title}{icon}
            </Title>
            <Paragraph>
                {text}
            </Paragraph>
        </Box>
    )
}