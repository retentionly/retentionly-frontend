import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import Button from '../../components/Common/Button'
import SectionTitle from '../../ui/SectionTitle'
import { PageWrapper } from '../../ui/PageWrapper'

const UserDashboard = () => {
  return (
    <PageWrapper center={true}>
        <Container>
            <SectionTitle title="Welcome Home 🏠" text="Your Dashboard where you can find everything your looking for." mb="80px"/>
            <Box maxW={400} mx="auto" mb="60px">
                
            </Box>
            <Box maxW={450} mx="auto">
                <Button>
                    Confirm Goal 
                </Button>
            </Box>
        </Container>
    </PageWrapper>
  )
}

export default UserDashboard