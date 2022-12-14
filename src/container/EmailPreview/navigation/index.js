import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from '../../../components/Common/Button'

const EmailNavigation = ({ handleSubmit, success }) => {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { templates } = useSelector((state) => state.user)
    const id = pathname?.split('/')[2]

    // const template = templates[Number(id)]?.emailId;
    const index = templates.findIndex((e) => e.emailId === Number(id))
    const nextTemplate = templates[index + 1]?.emailId;

    useEffect(() => {
        if (success) {
            if (nextTemplate) {
                navigate(`/email/${nextTemplate}`)
            } else {
                navigate(`/email-final`)
            }
        }
    }, [success])

    return (
        <Flex justifyContent="flex-end">
            <Box px="15px" mr="-23px" width="50%" cursor="pointer">
                <Button as={Link} onClick={handleSubmit} btnProps={{ width: "100%" }}>{nextTemplate ? "Edit Next Email" : "Finish"}</Button>
            </Box> 
        </Flex>
    )
}

export default EmailNavigation