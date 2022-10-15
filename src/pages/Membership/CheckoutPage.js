import { Container } from '@chakra-ui/react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from '../../components/CheckoutForm';
import { PageWrapper } from '../../ui/PageWrapper';
import { CheckoutBox } from './style';
const stripePromise = loadStripe(process.env.REACT_APP_stripeSecret);

const CheckoutPage = () => {
    const { amount } = useParams();

    console.log(process.env.REACT_APP_stripeSecret);

    return (
        <PageWrapper minH={"calc(100vh - 170px)"} center={true}>
            <Container>
                <CheckoutBox maxW="500px" w="100%" mx="auto"  border="2px">
                    <h1>Checkout Page</h1>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm amount={amount}/>
                    </Elements>
                </CheckoutBox>
            </Container>
        </PageWrapper>
    )
}

export default CheckoutPage