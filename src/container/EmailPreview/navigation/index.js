import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import Button from '../../../components/Common/Button'

const EmailNavigation = () => {
    const { pathname } = useLocation();
    const { templates } = useSelector((state) => state.user)
    const id = pathname?.split('/')[2]
    
    const nextTemplate = templates[templates.length - 1] && templates[Number(id) + 1].id;
    
    console.log(nextTemplate);

    return (
        <Flex width="100%" justifyContent="flex-end">
            {
                1 == 1
                    ? <Box px="15px" mr="-23px" width="50%" cursor="pointer">
                        <Button as={Link} btnProps={{ width: "100%" }}>Finish</Button>
                    </Box>
                    : <Box px="15px" mr="-23px" width="50%" cursor="pointer">
                        <Button as={Link} btnProps={{ width: "100%" }}>
                            Edit Next Email
                        </Button>
                    </Box>
            }
        </Flex>
    )
}

export default EmailNavigation