import { Box, Heading, Text } from "@chakra-ui/react"
import { Text30,Text65 } from "../../theme/text"

export default function SectionTitle({title,icon,text,...rest}){
    return(
        <Box {...rest} textAlign="center">
            <Heading as='h1' {...Text65} mb="30px">
                {title}{icon}
            </Heading>
            <Text {...Text30}>
                {text}
            </Text>
        </Box>
    )
}