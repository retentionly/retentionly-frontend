import { Container, List, ListItem, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Text20, Text25 } from '../../theme/text';
import { PageWrapper } from '../../ui/PageWrapper';
import SectionTitle from '../../ui/SectionTitle';



const EventConfirmedDashboard = () => {

  return (
    <>
      <PageWrapper>
        <Container>
          <SectionTitle title="Welcome Home 🏠" text="Your Dashboard where you can find everything your looking for." mb="80px" />
          <List display="flex" justifyContent="space-around">
            <ListItem maxW="300px">
              <Text {...Text25} mb="10px">Editing Email Journeys</Text>
              <Text {...Text20}>To edit or update any of your emails
                please contact the CerealBox team
                on hello@cerealboxagency.com.</Text>
            </ListItem>
            <ListItem maxW="300px">
              <Text {...Text25} mb="10px">Cancel Plan</Text>
              <Text {...Text20}>To cancel plan please email
                hello@cerealboxagency.com.</Text>
            </ListItem>
            <ListItem maxW="300px">
              <Text {...Text25} mb="10px">Billing & Plans</Text>
              <Text {...Text20}>To update your preferred payment
                method please email
                hello@cerealboxagency.com.</Text>
            </ListItem>
          </List>
        </Container>
      </PageWrapper>

    </>
  )
}

export default EventConfirmedDashboard