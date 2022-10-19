import { Box, Container, Text } from '@chakra-ui/react';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Common/Button';
import Input from '../../components/Common/Input';
import Toaster from '../../components/Toaster/Toaster';
import { useRegisterMutation } from '../../features/auth/authApi';
import auth from '../../firebase.init';
import { Text20 } from "../../theme/text";
import Loader from '../../ui/Loaders/Loading';
import { PageWrapper } from '../../ui/PageWrapper';
import SectionTitle from '../../ui/SectionTitle';
import { LinkText } from './style';

const Register = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const [toasterOpen, setToasterOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('error');

    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useCreateUserWithEmailAndPassword(auth);

    // REGISTER MUTATION
    const [register, { data, isLoading: registerLoading, isError }] = useRegisterMutation();

    // REGISTER RESPONSE
    useEffect(() => {
        if (user) {
            setToasterOpen(false)
            setIsLoading(false)
            navigate('/')
        }
        if (emailError) {
            setIsLoading(false)
            setToasterOpen(true)
            setErrorMessage(emailError.code);
        }
    }, [data, user, emailError, navigate])

    // REGISTER FORM 
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },

        onSubmit: values => {
            if (values.password !== values.confirmPassword) {
                setErrorMessage('Password Do Not Match');
                setToasterOpen(true)
                setTimeout(() => {
                    setErrorMessage('')
                    setToasterOpen(false)
                }, 2000)
            } else if (values.password.length < 6 || values.confirmPassword.length < 6) {
                setErrorMessage('Password Must Be 6 Character');
                setToasterOpen(true)
                setTimeout(() => {
                    setErrorMessage('')
                    setToasterOpen(false)
                }, 2000)
            } else {
                setIsLoading(true)
                register({
                    name: values.name,
                    email: values.email,
                    password: values.password
                })
                createUserWithEmailAndPassword(values.email, values.password);
            }
        },
    });

    if (loading || isLoading || emailLoading) {
        return <Loader />
    }


    return (
        <PageWrapper>
            <Container maxW={1000}>
                <SectionTitle title="Create an account 🥳" text="You’re so close to getting more out of your donors." mb="80px" />
                <Box maxW={500} mb="60px" mx="auto">
                    <form onSubmit={formik.handleSubmit}>

                        <Input placeholder="Name :" onChange={formik.handleChange} value={formik.values.name} attrs={{
                            id: 'name', name: "name",
                            type: "text",
                        }} />

                        <Input placeholder="Email :" onChange={formik.handleChange} value={formik.values.email} attrs={{
                            id: 'email', name: "email",
                            type: "email",
                        }} />

                        <Input placeholder="Password :" onChange={formik.handleChange}
                            value={formik.values.password} attrs={{
                                id: 'password', name: "password",
                                type: "password",
                            }} />

                        <Input placeholder="Confirm Password :" onChange={formik.handleChange} value={formik.values.confirmPassword} attrs={{
                            id: 'conirmPassword', name: "confirmPassword",
                            type: "password",
                        }} />
                        <Box maxW={550} mx="auto" mt="10px">
                            <Text {...Text20}>
                                Already Have An Account?{" "}
                                <LinkText to="/login" as={Link}>
                                    Login Here
                                </LinkText>
                            </Text>
                        </Box>
                        <Box maxW={450} mx="auto">
                            <Button type="submit">
                                Register
                            </Button>
                        </Box>
                    </form>

                </Box>

            </Container>
            <Toaster status={status} open={toasterOpen} message={errorMessage} />
        </PageWrapper>
    )
}

export default Register;


