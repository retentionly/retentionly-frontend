import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../../firebase.init'
import { HeaderMain, HeaderSecondary } from '../../layout/Header'
import { Text20, Text30 } from '../../theme/text'

const NotFound = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <>
            {
                user
                    ? <HeaderMain />
                    : <HeaderSecondary />
            }
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
        </>
    )
}

export default NotFound