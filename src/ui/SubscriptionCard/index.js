import { Box, Heading, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { Text25, Text45 } from '../../theme/text'
import SuperTag from "../../components/SuperTag"

const Badge = styled(Text)`
    background:#FFC3C4;
    color:#000;
    padding:10px 23px;
    border-top-left-radius:25px;
    border-top-right-radius:25px;
    left:20px;
    display:inline-block;
    top:0;
    transform:translateY(-100%);
    position:absolute;
`

const SubscriptionCard = ({ category, price, text, badge, color,bg, ...rest }) => {

    return (
        <Box  boxShadow='lg' h='100%' color={'#fff'} px="18px" bg={bg} py="30px" position={"relative"} mt={"50px"} {...rest}>
            {badge && <Badge {...Text25} bg>{badge}</Badge>}
            <Text {...Text25} minH="30px">
                {category}
            </Text>
            <Heading as='h1' {...Text45} mb="30px">
                {price}
            </Heading>
            <Text {...Text25} bg="#FFFFFF" color="#000" p={"15px"}>
                <SuperTag value={text}/>
            </Text>
 
        </Box>
    )
}

export default SubscriptionCard