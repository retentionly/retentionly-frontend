import { Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "../CheckoutForm";
import Button from "../Common/Button/index";
const stripePromise = loadStripe(process.env.REACT_APP_stripeSecret);

function PaymentModal({ active, details }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        if (details.amount > 1) {

            // Create PaymentIntent as soon as the page loads
            fetch(`${process.env.REACT_APP_API_URL}/create-payment-intent`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": `${process.env.REACT_APP_CLIENT_URL}`,
                },
                body: JSON.stringify({ details }),
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret));
        }
    }, [details]);

    return (
        <>
            <Box maxW="450px" mx="auto" opacity={active ? '1' : '0.5'} pointerEvents={active ? 'visible' : 'none'}>
                <Button onClick={onOpen}>Pay With Card</Button>
            </Box>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Checkout</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb="6">
                        {clientSecret && (
                            <Elements stripe={stripePromise}>
                                <CheckoutForm clientSecret={clientSecret} setClientSecret={setClientSecret} />
                            </Elements>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default PaymentModal