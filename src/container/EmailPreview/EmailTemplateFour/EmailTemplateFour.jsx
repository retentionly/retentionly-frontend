import { Box, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import PreviewTemplateFour from '../../../components/EmailPreviews/PreviewBodyFour'
import { Text30 } from '../../../theme/text'
import { PageWrapper } from '../../../ui/PageWrapper'
import SectionTitle from '../../../ui/SectionTitle'
import EmailNavigation from '../navigation'
import { PreviewFrame } from '../style'
import EditBlockFour from './EditBlockFour'

const EmailTemplateFour = ({ id, onDrop, images, image, tempLoading }) => {

  return (
    <PageWrapper>
      <Container>
        <Box>
          <SectionTitle title={`Edit Email 4 📧`} text={'Only one more email after this. You got this!'} mb="80px" maxW="730px" mx="auto" />
          <Flex color='white' justifyContent={"space-between"}>
            <Box flex='1' maxW="550px">
              <PreviewFrame>
                <Text py="30px" textAlign={"center"} color="#000" {...Text30}>Preview</Text>
                <PreviewTemplateFour images={images} image={image} />
              </PreviewFrame>
            </Box>
            <Box flex='1' maxW="420px">
              <EditBlockFour onDrop={onDrop} id={id} tempLoading={tempLoading} />
            </Box>
          </Flex>
        </Box>
        <EmailNavigation />
      </Container>
    </PageWrapper>
  )
}

export default EmailTemplateFour