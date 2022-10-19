
import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Option from '../../ui/OptionButton';
import { PageWrapper } from '../../ui/PageWrapper';
import SectionTitle from '../../ui/SectionTitle';

const editiconStyle = {
    w: "75px",
    ml: "20px"
}

const Emails = () => {

    const { pathname } = useLocation();
    const { templates } = useSelector((state) => state.user)

    console.log('from email', pathname);

    // if (isLoading || loading) {
    //     return <Loader />
    // }
    // if (isError) {
    //     return <Error />
    // }

    return (
        <PageWrapper>
            <Container>
                <SectionTitle title="Recurring Series 🗓" text="Let’s turn your supporters into monthly donors." mb="80px" />
                <Box maxW="550px" mx="auto">
                    {
                        templates?.map((e, i) => <Box key={e.uniqueID}>
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