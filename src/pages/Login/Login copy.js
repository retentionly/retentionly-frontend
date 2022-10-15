import { Box, Container, Text } from '@chakra-ui/react';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Button from '../../components/Common/Button';
import Input from "../../components/Common/Input/index";
import Loading from '../../components/Loaders/Loading';
import SectionTitle from '../../components/SectionTitle';
import Toaster from '../../components/Toaster/Toaster';
import auth from '../../firebase.init';
import { Text20 } from '../../theme/text';
import { PageWrapper } from '../../ui/PageWrapper';
import { LinkText } from './style';

const Login = () => {
    const navigate = useNavigate()
    const [toasterOpen, setToasterOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [user, loading] = useAuthState(auth);

    const [
        signInWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useSignInWithEmailAndPassword(auth);

    // REGISTER RESPONSE
    useEffect(() => {

        // if (user && !adminState?.admin && !userState?.eventConfirmed) {
        //     navigate("/goals")
        // }

        // if (user && adminState?.admin) {
        //     navigate('/admin')
        // }

        // if (user && userState?.eventConfirmed && !adminState?.admin) {
        //     navigate('/user')
        // }

        if (user || emailUser) {
            setErrorMessage("");
            setToasterOpen(false)
            navigate('/')
        }

        if (emailError) {
            setErrorMessage(emailError.code);
            setToasterOpen(true)
        }

    }, [user, emailError])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            signInWithEmailAndPassword(values.email, values.password);
        },
    });

    if (!user && !emailError && (emailLoading || loading)) {
        return <Loading />
    }

    const updateEmailField = () => {
        setToasterOpen(false)
    }

    return (
        <PageWrapper>
            <Container maxW={800}>
                <SectionTitle title="Welcome Back! 🤗" text="We’re so happy to have you back. 
That’s how we want you to feel about your donors." mb="80px" />
                <Box maxW={450} mb="60px" mx="auto">
                    <form onSubmit={formik.handleSubmit}>
                        <Input placeholder="Email :" onChange={formik.handleChange} value={formik.values.email} attrs={{
                            id: 'email', name: "email",
                            type: "email",
                        }} />
                        <Input placeholder="Password :" onChange={(e) => {
                            formik.handleChange(e)
                            updateEmailField()
                        }} value={formik.values.password} attrs={{
                            id: 'password', name: "password",
                            type: "password",
                        }} />
                        <Box maxW={550} mx="auto" mt="10px">
                            <Text {...Text20}>
                                Don't Have An Account?{" "}
                                <LinkText to="/register" as={Link}>
                                    Register Here
                                </LinkText>
                            </Text>
                        </Box>
                        <Box maxW={450} mx="auto" mt="60px">
                            <Button type="submit">
                                Login
                            </Button>
                        </Box>
                    </form>
                </Box>

            </Container>
            <Toaster open={toasterOpen} message={errorMessage} status={'error'} />
        </PageWrapper>
    )
}

export default Login;