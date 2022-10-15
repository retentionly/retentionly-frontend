import { Box, Container } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoutBtn from "../../components/LogoutBtn";
import { Text30 } from "../../theme/text";
import Option from "../../ui/OptionButton";
import SectionTitle from "../../ui/SectionTitle";

const TextSyled = styled(Box)`
span {
    font-weight: 800;
}
`

export default function FinalConfirmation() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useSelector(state => state)
    // const [updateUserStatus, { data, isLoading, isSuccess, isError }] = useUpdateUserStatusMutation();

    // const handleContinue = async () => {
    //     await updateUserStatus({
    //         email: user?.email,
    //         status: true
    //     })
    //     if (isSuccess) {
    //         navigate('/user')
    //     }
    // }

    // useEffect(() => {
    //     return () => {
    //         updateUserStatus({
    //             email: user?.email,
    //             status: true
    //         })
    //     }
    // }, [])

    // if (isLoading || user?.eventConfirmed === undefined) {
    //     return <Loader />
    // }

    // if (!user?.eventConfirmed) {
    //     return (
    //         <Container>
    //             <SectionTitle title="You’re ready to go! 🚀" mt="80px" mb="40px" />
    //             <TextSyled
    //                 {...Text20} mb="50px" textAlign="center">
    //                 Thanks for booking in a call with us. <span>On the call we will connect
    //                     your database with our platform. </span> That way we send emails to
    //                 your donors without having to bother you any further.
    //                 <br />
    //                 We can connect to either your CRM or your website.
    //                 <span>Ensure that
    //                     you have the relevent authority to give us access.</span>
    //                 That way we can get your campaign live as quick as possbile.
    //                 <br />
    //                 <span>Get ready to fundraise more!</span>
    //             </TextSyled>
    //             <Button onClick={handleContinue}>
    //                 Continue
    //             </Button>
    //         </Container>
    //     )
    // } else {
    //     <Navigate to="/user" />
    // }

    return (
        <Container maxW="1000px">
            <SectionTitle title="You’re ready to go! 🚀" mt="80px" mb="40px" />
            <TextSyled
                {...Text30} mb="50px" textAlign="center">
                Thanks for booking in a call with us. <span>On the call we will connect
                    your database with our platform. </span> That way we send emails to
                your donors without having to bother you any further.
                <br />
                <br />
                We can connect to either your CRM or your website.{" "}
                <span>Ensure that
                    you have the relevent authority to give us access. </span>
                That way we can get your campaign live as quick as possbile.
                <br />
                <br />
                <span>Get ready to fundraise more!</span>
            </TextSyled>
            <Box maxW="450px" mx='auto'>
            <LogoutBtn>
                <Option>
                    Sign out
                </Option>
            </LogoutBtn>
            </Box>
        </Container>
    )
}