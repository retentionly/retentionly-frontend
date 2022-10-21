import { Box, Container, Flex, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
// import logo from "../../assets/png/brand.png"
import logo from "../../assets/png/logo3.png";
import Button from '../../components/Common/Button'
import { useGetPaymentStatusQuery } from '../../features/auth/authApi'
import { setAmount, setCategory, setEmail, setShipping, setTransactionId } from '../../features/payment/paymentSlice'
import auth from '../../firebase.init'
import { Text30 } from '../../theme/text'
import Loader from '../../ui/Loaders/Loading'
import { PageWrapper } from '../../ui/PageWrapper'
import SectionTitle from '../../ui/SectionTitle'
import { SecureText } from './style'

const PaymentSuccess = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, loading] = useAuthState(auth)
    const { user: userState } = useSelector(state => state);
    const { data, isLoading, isError } = useGetPaymentStatusQuery(user?.email)

    useEffect(() => {
        dispatch(setAmount(data?.payment?.amount))
        dispatch(setEmail(data?.payment?.email))
        dispatch(setTransactionId(data?.payment?.transactionId))
        dispatch(setShipping(data?.payment?.shipping))
        dispatch(setCategory(data?.payment?.category))
    }, [data, dispatch])

    if (isLoading || loading) {
        return <Loader />
    }

    return (
        <PageWrapper center="true">
            <Container>
                <SectionTitle title="Congratulations 🏆" mb="30px" />
                <Box maxW={800} mx="auto" mb="60px" textAlign="center">
                    <Text {...Text30} mb="30px">
                        You Have Subscribed To <b>{data?.payment?.category}</b> Plan For <b>£{data?.payment?.amount}</b> Per Month.
                    </Text>
                    <Text {...Text30} mb="25px">
                        Your Transaction ID: <small>{data?.payment?.transactionId}</small>
                    </Text>
                    <Flex justifyContent="center" alignItems="center">
                        <SecureText {...Text30} mb="10px" >
                            Payment authenticated and secured by <img src={logo} alt="" />
                        </SecureText>
                        {/* <Box maxW="60px" ml="10px">
                            <img src={logo} alt="" />
                        </Box> */}
                    </Flex>
                    <Flex mx="-15px" justifyContent="center">
                        <Box px="15px" width="100%" cursor="pointer">
                            <Button as={Link} to="/" btnProps={{ width: "100%" }}>Continue</Button>
                        </Box>
                    </Flex>
                </Box>
            </Container>
        </PageWrapper>
    )
}

export default PaymentSuccess