import { Box, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../../../ui/Loaders/Loading'
import { Text45 } from '../../../theme/text'
import NavigationButton from '../../../ui/NavigationButton'
import { PageWrapper } from '../../../ui/PageWrapper'
import CardPreview from './CardPreview'
import Preview from './Preview'
import { useGetTemplateQuery } from '../../../features/user/userApi'

const EmailPreview = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    
    const { data, isLoading, isError } = useGetTemplateQuery(id, {
        refetchOnMountOrArgChange: true,
    });

    if (isLoading) {
        return <Loader />
    }

    return (
        <PageWrapper>
            <Container>
                <Box>
                    <Flex justify={"space-between"}>
                        <NavigationButton onClick={() => navigate(-1)} imageProps={{ w: "50px", mr: "10px" }}></NavigationButton>
                    </Flex>
                </Box>

                <Box>
                    <Text textAlign="center" {...Text45}>Template: {data?.name}</Text>
                    <Flex color='white' justifyContent={"space-between"} mt="60px">
                        <Box flex='1' maxW="550px">
                            <Preview id={id} />
                        </Box>
                        <Box flex='1' maxW="420px">
                            <CardPreview id={id} />
                        </Box>
                    </Flex>
                </Box>
            </Container>
        </PageWrapper>
    )
}

export default EmailPreview