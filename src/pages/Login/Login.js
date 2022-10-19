import { Box, Container, Text } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from "yup";
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import Loading from '../../ui/Loaders/Loading';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Common/Button';
import Toaster from '../../components/Toaster/Toaster';
import { revertAllAdmin } from '../../features/admin/adminSlice';
import { revertAllAuth } from '../../features/auth/authSlice';
import { revertAllMaster } from '../../features/master/masterSlice';
import { revertAllPayment } from '../../features/payment/paymentSlice';
import { revertAllTemplate } from '../../features/template/templateSlice';
import { useGetUserQuery } from '../../features/user/userApi';
import { revertAllUser } from '../../features/user/userSlice';
import auth from '../../firebase.init';
import { Text20 } from '../../theme/text';
import Loader from '../../ui/Loaders/Loading';
import { PageWrapper } from '../../ui/PageWrapper';
import SectionTitle from '../../ui/SectionTitle';
import { ErrorMessageBox, InputContainer, InputDivStyled, InputStyled, LinkText } from './style';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, loading, error] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [toasterOpen, setToasterOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isUserLoading, setIsUserLoading] = useState(false)
    const { data, isLoading, isError } = useGetUserQuery(email);
    const { user: userState } = useSelector(state => state)

    const SigninSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Too Short!')
            .max(32, 'Too Long!')
            .required('Required'),
    });


    // AUTHENTICATE USER FROM FIREBASE
    const [
        signInWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = async (values) => {
        setIsUserLoading(true)
        setEmail(values.email)
        await signInWithEmailAndPassword(values.email, values.password)
    }

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                setIsUserLoading(false)
                navigate(data?.userStatus?.path)
            }, 1000)
        }
        if (emailError) {
            dispatch(revertAllAdmin())
            dispatch(revertAllAuth())
            dispatch(revertAllMaster())
            dispatch(revertAllPayment())
            dispatch(revertAllTemplate())
            dispatch(revertAllUser())
            setIsUserLoading(false)
            setErrorMessage(emailError.code);
            setToasterOpen(true)
            setTimeout(() => {
                setErrorMessage('');
                setToasterOpen(false)
            }, 1000)
        }
    }, [user, emailError])

    if (isUserLoading || loading || isLoading) {
        return <Loader />
    }

    return (
        <PageWrapper>
            <Container maxW={800}>
                <SectionTitle title="Welcome Back! 🤗" text="We’re so happy to have you back. 
That’s how we want you to feel about your donors." mb="80px" />
                <Box maxW={450} mb="60px" mx="auto">
                    {/* <form onSubmit={formik.handleSubmit}>
                        <Input placeholder="Email :" onChange={formik.handleChange} value={formik.values.email} attrs={{
                            id: 'email', name: "email",
                            type: "email",
                        }} />
                        <Input placeholder="Password :" onChange={formik.handleChange} value={formik.values.password} attrs={{
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

                    </form> */}
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={SigninSchema}
                        onSubmit={values => {
                            // same shape as initial values
    
                            handleSubmit(values)
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>

                                {/* Login Email Input Field */}
                                <InputContainer>
                                    <InputDivStyled>
                                        <InputStyled name="email" type="email" placeholder="Email:" />
                                    </InputDivStyled>
                                    {errors.email && touched.email ? (
                                        <ErrorMessageBox>
                                            <span>
                                                {errors.email}
                                            </span>
                                        </ErrorMessageBox>
                                    ) : null}
                                </InputContainer>

                                {/* Login Password Input Field */}
                                <InputContainer>
                                    <InputDivStyled>
                                        <InputStyled name="password" type="password" placeholder="Password:" />
                                    </InputDivStyled>
                                    {errors.password && touched.password ? (
                                        <ErrorMessageBox>
                                            <span>{errors.password}</span>
                                        </ErrorMessageBox>
                                    ) : null}
                                </InputContainer>
                                
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
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Container >
            <Toaster open={toasterOpen} message={errorMessage} status={'error'} />
        </PageWrapper >
    )
}

export default Login

