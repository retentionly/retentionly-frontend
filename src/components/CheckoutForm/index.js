import { Button } from '@chakra-ui/react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useUpdatePaymentStatusMutation } from '../../features/auth/authApi';
import auth from '../../firebase.init';
import './checkout.css';

const CheckoutForm = ({ clientSecret, setClientSecret }) => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [user] = useAuthState(auth)

    const { user: userState, paymentStatus } = useSelector(state => state);
    const [updatePaymentStatus, { data: updatePaymentResult, isLoading, isError }] = useUpdatePaymentStatusMutation();

    const [paymentError, setPaymentError] = useState("");

    const updadePayment = (paymentIntent) => {
        setPaymentError('')
        const data = {
            email: user?.email,
            transactionId: paymentIntent?.id,
            paymentInfo: {
                transactionId: paymentIntent?.id,
                email: user?.email,
                category: paymentIntent?.description,
                shipping: {
                    name: paymentIntent.shipping.name,
                    address: paymentIntent.shipping.address
                },
                amount: Number(paymentIntent.amount) / 100,
                uniqueId: userState?.uniqueID
            }
        }

        setTimeout(() => {
            updatePaymentStatus(data)
        })
    }

    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        // if card input is null 
        if (card === null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setPaymentError(error?.message || '')

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userState?.name,
                        email: userState?.email
                    },
                },
            },
        );

        if (intentError) {
            setPaymentError(intentError.message)
        } else {
            updadePayment(paymentIntent);
        }
    };

    useEffect(() => {
        if (isError) {
            console.log('error');
        }
        if (updatePaymentResult?.success) {
            navigate('/success')
        }
    }, [updatePaymentResult, isLoading, isError, paymentStatus, setClientSecret, navigate])

    return (
        <>
            <form id="payment-form" onSubmit={handleSubmit}>
                <CardElement

                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                        hidePostalCode: true
                    }}
                />
                <Button mt="5" colorScheme='teal' size='sm' type="submit" disabled={!stripe || !elements}>
                    Pay
                </Button>
            </form>
            {paymentError && <p>{paymentError}</p>}
        </>
    )
}

export default CheckoutForm

