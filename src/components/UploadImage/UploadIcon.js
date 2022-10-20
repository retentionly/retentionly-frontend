import { Box, Center } from '@chakra-ui/react'
import React from 'react'

const UploadIcon = () => {
    return (
        <Box border="5px solid black">
            <Center height="403px" width="403px">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={300}
                    height={300}
                    viewBox="0 0 512 512"
                >
                    <path
                        d="M182.461 155.48L232 105.941V368a24 24 0 0048 0V105.941l49.539 49.539a24 24 0 1033.941-33.941l-90.509-90.51a24 24 0 00-33.942 0l-90.509 90.51a24 24 0 1033.941 33.941z"
                        data-original="#000000"
                    />
                    <path
                        d="M464 232a24 24 0 00-24 24v184H72V256a24 24 0 00-48 0v192a40 40 0 0040 40h384a40 40 0 0040-40V256a24 24 0 00-24-24z"
                        data-original="#000000"
                    />
                </svg>
            </Center>
        </Box>
    )
}

export default UploadIcon