import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import PreviewTemplateThree from '../../../components/EmailPreviews/PreviewBodyThree'
import { Text30 } from '../../../theme/text'
import SectionTitle from '../../../ui/SectionTitle'
import { PreviewFrame } from '../style'
import EditBlockThree from './EditBlockThree'

const EmailTemplateThree = ({ id, onDrop, images, image, tempLoading }) => {

    return (
        <Box>
             <SectionTitle title={`Edit Email 3📧`} text={'You are half way there - edit your third email.'} mb="80px" maxW="730px" mx="auto" />
            <Flex color='white' justifyContent={"space-between"}>
                <Box flex='1' maxW="550px">
                    <PreviewFrame>
                        <Text py="30px" textAlign={"center"} color="#000" {...Text30}>Preview</Text>
                        <PreviewTemplateThree images={images} image={image}/>
                    </PreviewFrame>
                </Box>
                <Box flex='1' maxW="420px">
                    <EditBlockThree id={id} onDrop={onDrop} tempLoading={tempLoading}/>
                </Box>
            </Flex>
        </Box>
    )
}

export default EmailTemplateThree