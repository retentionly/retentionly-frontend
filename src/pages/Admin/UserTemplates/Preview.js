import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { PreviewBodyFive, PreviewBodyFour, PreviewBodyOne, PreviewBodyThree, PreviewBodyTwo } from '../../../components/EmailPreviews'
import Loader from '../../../ui/Loaders/Loading'

import { Text30 } from '../../../theme/text'
import { PageWrapper } from '../../../ui/PageWrapper'
import SectionTitle from '../../../ui/SectionTitle'
import { PreviewFrame } from '../../EmailDashboard/PreviewBlock/style'
import { useGetTemplateQuery } from '../../../features/user/userApi'

const Preview = () => {

    const { id } = useParams()
    const { data, isLoading, isError } = useGetTemplateQuery(id, {
        refetchOnMountOrArgChange: true,
    });

    const { ref, name } = data || {};

    if (isLoading) {
        return <Loader />
    }

    return (
        <PageWrapper>
            <Container>
                <SectionTitle title={name} />
                <Box maxW="550px" mx="auto">
                    <PreviewFrame>
                        <Text py="30px" textAlign={"center"} color="#000" {...Text30}>Preview</Text>
                        {
                            ref === 'template_1' && <PreviewBodyOne image={data?.image} />
                        }
                        {
                            ref === 'template_2' && <PreviewBodyTwo image={data?.image} />
                        }
                        {
                            ref === 'template_3' && <PreviewBodyThree image={data?.image} />
                        }
                        {
                            ref === 'template_4' && <PreviewBodyFour image={data?.image} />
                        }
                        {
                            ref === 'template_5' && <PreviewBodyFive image={data?.image} />
                        }
                    </PreviewFrame>
                </Box>
            </Container>
        </PageWrapper>
    )
}

export default Preview