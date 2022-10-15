import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Text20, Text30 } from '../../theme/text'

const NotFound = () => {

    return (
        <Center h="100vh">
            <Box textAlign="center">
                <Text {...Text30}>
                    Something Went Wrong
                </Text>
                <Text textDecoration="underline" mt="20px" {...Text20}>
                    <Link to="/">
                        Back To Home
                    </Link>
                </Text>
            </Box>
        </Center>
    )
}

export default NotFound