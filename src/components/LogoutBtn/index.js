import { Box } from '@chakra-ui/react'
import React from 'react'
import useLogout from '../../hooks/useLogout'
import Loader from '../../ui/Loaders/Loading'

const LogoutBtn = ({ children, path, rest }) => {
   
    const [logOut, isLoading] = useLogout()

    if (isLoading) {
        return <Loader />
    }

    return (
        <Box onClick={logOut} {...rest} cursor="pointer">
            {children}
        </Box>
    )
}

export default LogoutBtn