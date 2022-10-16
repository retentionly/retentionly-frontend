import { Box, Container, SimpleGrid } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import PaymentModal from '../../components/PaymentModal/PaymentModal';
import auth from '../../firebase.init';
import usePayment from '../../hooks/usePayment';
import Loader from '../../ui/Loaders/Loading';
import { PageWrapper } from '../../ui/PageWrapper';
import SectionTitle from '../../ui/SectionTitle';
import SubscriptionCard from '../../ui/SubscriptionCard';

const Membership = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const [user] = useAuthState(auth);
  const [paymentDetails, setPaymentDetails] = useState({});
  const { paymentStatus } = usePayment(user);
  const [active, setActive] = useState(false);
  const from = location.state?.from?.pathname || '/'

  const subscribeCardData = [
    {
      id: 'regular',
      amount: 25,
      category: 'Regular',
      text: '1 donor journey <br> Up to 2,000 donors'
    },
    {
      id: 'professional',
      amount: 35,
      category: 'Professional',
      text: '3 donor journeys <br> Up to 5,000 donors',
      badge: "Most Popular"
    },
    {
      id: 'established',
      amount: 75,
      category: 'Established',
      text: '3 donor journeys <br> Up to 10,000 donors'
    },
  ]

  if (paymentStatus === undefined) {
    return <Loader />
  }

  if (paymentStatus) {
    navigate(from, { replace: true });
  }

  return (
    <>
      <PageWrapper>
        <Container>

          <SectionTitle title='Get more out of your donors 📈' text='Select a package to get the most out of your donors.' mb="80px" />
          <SimpleGrid columns={3} spacing={"17px"} >

            {
              subscribeCardData.map((el, i) =>
                <SubscriptionCard key={el.id} onClick={() => {
                  setPaymentDetails(el)
                  setActive(i + 1)
                }}
                  price={`£${el.amount}/month`}
                  bg={active === (i + 1) ? '#000' : '#30313d'}
                  category={el.category}
                  text={el.text}
                  badge={el.badge}
                  _hover={{
                    cursor: 'pointer'
                  }}
                />
              )
            }

          </SimpleGrid>

          {
            paymentDetails.amount > 1
            && <Box mt="20" w="100%" textAlign="center"><PaymentModal active={active} mx="auto" details={paymentDetails} /></Box>
          }

        </Container>
      </PageWrapper>
    </>
  )
}

export default Membership