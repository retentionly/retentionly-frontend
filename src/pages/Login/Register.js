import { Box, Container, Text } from '@chakra-ui/react';
import { Form, Formik, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import Button from '../../components/Common/Button';
import Toaster from '../../components/Toaster/Toaster';
import { revertAllAdmin } from '../../features/admin/adminSlice';
import { useRegisterMutation } from '../../features/auth/authApi';
import { revertAllAuth } from '../../features/auth/authSlice';
import { revertAllMaster } from '../../features/master/masterSlice';
import { revertAllPayment } from '../../features/payment/paymentSlice';
import { revertAllTemplate } from '../../features/template/templateSlice';
import { revertAllUser } from '../../features/user/userSlice';
import auth from '../../firebase.init';
import { Text20 } from "../../theme/text";
import Loader from '../../ui/Loaders/Loading';
import { PageWrapper } from '../../ui/PageWrapper';
import SectionTitle from '../../ui/SectionTitle';
import { ErrorMessageBox, InputContainer, InputDivStyled, InputStyled, LinkText } from './style';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [user, loading, error] = useAuthState(auth);
    const [isUserLoading, setIsUserLoading] = useState(false)
    const [toasterOpen, setToasterOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useCreateUserWithEmailAndPassword(auth);

    // REGISTER MUTATION
    const [register, { data, isLoading: registerLoading, isError }] = useRegisterMutation();

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                setIsUserLoading(false)
                navigate("/membership")
            }, 2000)
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

    // REGISTER FORM 
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },

        onSubmit: async (values) => {
            setIsUserLoading(true)
            await register({
                name: values.name,
                email: values.email,
                password: values.password
            })
            await createUserWithEmailAndPassword(values.email, values.password);
        },
    });

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Too Short!')
            .max(32, 'Too Long!')
            .required('Required'),
        confirm: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords don't match")
            .required()
    });

    const handleSubmit = async (values) => {
        setIsUserLoading(true)
        await register({
            name: values.name,
            email: values.email,
            password: values.password
        })
        await createUserWithEmailAndPassword(values.email, values.password);
    }

    if (registerLoading || loading || isUserLoading) {
        return <Loader />
    }

    return (
        <PageWrapper>

            <Container maxW={1000}>
                <SectionTitle title="Create an account 🥳" text="You’re so close to getting more out of your donors." mb="80px" />
                <Box maxW={500} mb="60px" mx="auto">
                    {/* <form onSubmit={formik.handleSubmit}>

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
                    </form> */}
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                            confirmPassword: ''
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            // same shape as initial values
                            console.log(values);
                            handleSubmit(values)
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>

                                {/* Register Name Input Field */}
                                <InputContainer>
                                    <InputDivStyled>
                                        <InputStyled name="name" placeholder="Name:" />
                                    </InputDivStyled>
                                    {errors.name && touched.name ? (
                                        <ErrorMessageBox>
                                            <span>
                                                {errors.name}
                                            </span>
                                        </ErrorMessageBox>
                                    ) : null}
                                </InputContainer>

                                {/* Register Email Input Field */}
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

                                {/* Register Password Input Field */}
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

                               {/* Register Confirm Password Input Field */}
                                <InputContainer>
                                    <InputDivStyled>
                                        <InputStyled name="confirm" type="password" placeholder="Confirm Password:" />
                                    </InputDivStyled>
                                    {errors.confirm && touched.confirm ? (
                                        <ErrorMessageBox>
                                            <span>{errors.confirm}</span>
                                        </ErrorMessageBox>
                                    ) : null}
                                </InputContainer>

                                <Box maxW={550} mx="auto" mt="10px">
                                    <Text {...Text20}>
                                        Already Have An Account?{" "}
                                        <LinkText to="/login" as={Link}>
                                            Login Here
                                        </LinkText>
                                    </Text>
                                </Box>
                                <Box maxW={450} mx="auto" mt="60px">
                                    <Button type="submit">
                                        Register
                                    </Button>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Box>
                <Toaster open={toasterOpen} message={errorMessage} status={'error'} />
            </Container>
        </PageWrapper>
    )
}

export default Register;


