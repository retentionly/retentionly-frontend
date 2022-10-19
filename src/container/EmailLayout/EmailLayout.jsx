import { Box, Container, Flex, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../../components/Common/Button'
import { useGetTemplatesQuery } from '../../features/user/userApi'
import auth from '../../firebase.init'
import Loader from '../../ui/Loaders/Loading'
import { PageWrapper } from '../../ui/PageWrapper'

const LoaderBox = styled(Box)`
${({ visibility }) => visibility ? 'pointer-events: visible; opacity: 1' : 'pointer-events: none; opacity: 0'};
transition: opacity 0.4s ease-in-out;
`

const EmailLayout = ({ children }) => {
    /* Local States */
    const [tempLoading, setTempLoading] = useState(false);

    /* Redux States */
    const { template } = useSelector(state => state);

    /* Hooks */
    const [user, loading] = useAuthState(auth)

    /* Redux Query */
    const { data, isLoading: userLoading, isError } = useGetTemplatesQuery(user?.email);

    /* Functions */
    // const handleSubmit = async () => {
    //     setTempLoading(true)
    //     if (selectedFile) {
    //         const result = await useUploadFile(storageRef, selectedFile, metadata);
    //         const url = await getDownloadURL(result.ref);
    //         if (url) {
    //             editTemplate({
    //                 id: uniqueId,
    //                 data: {
    //                     image: url,
    //                     name,
    //                     subjectLine,
    //                     preview,
    //                     serviceDesc,
    //                     beneficiaryName,
    //                     beneficiaryHelped,
    //                     beneficiaryAfter,
    //                     beneficiaryBefore,
    //                     beneficiaryDesc,
    //                     donationGoesFor,
    //                     donationFor,
    //                     donationDoes,
    //                     socialMediaBenefit,
    //                     social,
    //                     impactStat,
    //                     mainText
    //                 }
    //             })
    //             refetch()
    //         }
    //     } else {
    //         editTemplate({
    //             id: uniqueId,
    //             data: {
    //                 image,
    //                 name,
    //                 subjectLine,
    //                 preview,
    //                 serviceDesc,
    //                 beneficiaryName,
    //                 beneficiaryHelped,
    //                 beneficiaryAfter,
    //                 beneficiaryBefore,
    //                 beneficiaryDesc,
    //                 donationGoesFor,
    //                 donationFor,
    //                 donationDoes,
    //                 socialMediaBenefit,
    //                 social,
    //                 impactStat,
    //                 mainText
    //             }
    //         })
    //         refetch()
    //     }
    // }

    return (
        <PageWrapper>
            <Container>
                <LoaderBox visibility={tempLoading} position="fixed" inset="0" display="flex" flexDirection="column" justifyContent="center" alignItems="center" minH="100vh" minW="100%" bg="#fff" zIndex="9999">
                    <Text>Saving...</Text>
                    <Loader height={'100px'} />
                </LoaderBox>
                <Box>
                    <>
                        {children}
                    </>
                    
                </Box>
            </Container>

        </PageWrapper>
    )
}

export default EmailLayout