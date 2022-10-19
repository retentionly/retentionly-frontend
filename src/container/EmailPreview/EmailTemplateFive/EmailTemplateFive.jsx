import { Box, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import PreviewTemplateFive from '../../../components/EmailPreviews/PreviewBodyFive/PreviewTemplateFive'
import { Text30 } from '../../../theme/text'
import { PageWrapper } from '../../../ui/PageWrapper'
import SectionTitle from '../../../ui/SectionTitle'
import EmailNavigation from '../navigation'
import { PreviewFrame } from '../style'
import EditBlockFive from './EditBlockFive'

const EmailTemplateFive = ({ id, onDrop, images, image, tempLoading }) => {
    return (
        <PageWrapper>
            <Container>
                <Box>
                    <SectionTitle title={`Edit Email 5 📧`} text={'The last one! You’re one step away from getting monthly donors.'} mb="80px" maxW="730px" mx="auto" />
                    <Flex color='white' justifyContent={"space-between"}>
                        <Box flex='1' maxW="550px">
                            <PreviewFrame>
                                <Text py="30px" textAlign={"center"} color="#000" {...Text30}>Preview</Text>
                                <PreviewTemplateFive images={images} image={image} />
                            </PreviewFrame>
                        </Box>
                        <Box flex='1' maxW="420px">
                            <EditBlockFive id={id} onDrop={onDrop} tempLoading={tempLoading} />
                        </Box>
                    </Flex>
                </Box>
                <EmailNavigation />
            </Container>
        </PageWrapper>
    )
}

export default EmailTemplateFive