import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import PreviewTemplateTwo from '../../../components/EmailPreviews/PreviewBodyTwo/PreviewTemplateTwo'
import { Text30 } from '../../../theme/text'
import SectionTitle from '../../../ui/SectionTitle'
import { PreviewFrame } from '../style'
import EditBlockTwo from './EditBlockTwo'

const EmailTemplateTwo = ({ id,onDrop, images, image, tempLoading }) => {
  
  return (
    <Box>
       <SectionTitle title={`Edit Email 2📧`} text={'Edit your second email to get started.'} mb="80px" maxW="730px" mx="auto" />
      <Flex color='white' justifyContent={"space-between"}>
        <Box flex='1' maxW="550px">
          <PreviewFrame>
            <Text py="30px" textAlign={"center"} color="#000" {...Text30}>Preview</Text>
            <PreviewTemplateTwo images={images} image={image}/>
          </PreviewFrame>
        </Box>
        <Box flex='1' maxW="420px">
          <EditBlockTwo onDrop={onDrop} tempLoading={tempLoading}/>
        </Box>
      </Flex>
    </Box>
  )
}

export default EmailTemplateTwo