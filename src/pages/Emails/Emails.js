
import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Error from '../../components/Error/Error';
import { useGetTemplatesQuery } from '../../features/template/templateApi';
import auth from '../../firebase.init';
import Loader from '../../ui/Loaders/Loading';
import Option from '../../ui/OptionButton';
import { PageWrapper } from '../../ui/PageWrapper';
import SectionTitle from '../../ui/SectionTitle';

const editiconStyle = {
    w: "75px",
    ml: "20px"
}

const Emails = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [user, loading] = useAuthState(auth)
    const { data, isLoading, isError } = useGetTemplatesQuery(user?.email, {
        refetchOnMountOrArgChange: true,
    });

    if (isLoading || loading) {
        return <Loader />
    }
    if (isError) {
        return <Error />
    }

    return (
        <PageWrapper>
            <Container>
                {/* <Box>
                    <Flex justify={"space-between"}>
                        <NavigationButton onClick={() => navigate('/master')} imageProps={{ w: "50px", mr: "10px" }}>Back To Master</NavigationButton>
                    </Flex>
                </Box> */}
                <SectionTitle title="Recurring Series 🗓" text="Let’s turn your supporters into monthly donors." mb="80px" />
                <Box maxW="550px" mx="auto">
                    {
                        data?.templates?.map((e, i) => <Box key={e.uniqueID}>
                            <Option editiconProps={editiconStyle} editicon="true" deleteicon="true" deleteid={e.uniqueID} to={`/email/${e.emailId}`} mb="30px">
                                {e.name}
                            </Option>
                        </Box>)
                    }
                </Box>
            </Container>
        </PageWrapper>
    )
}

export default Emails