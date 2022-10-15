import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import viewIcon from "../../../assets/png/view.png"
import { useGetTemplatesQuery } from '../../../features/template/templateApi'
import Loader from '../../../ui/Loaders/Loading'
import Option from '../../../ui/OptionButton'
import { PageWrapper } from '../../../ui/PageWrapper'
import SectionTitle from '../../../ui/SectionTitle'

const UserTemplates = () => {
    const { email } = useParams()
    const navigate = useNavigate()
    const { data, isLoading, isError } = useGetTemplatesQuery(email, {
        refetchOnMountOrArgChange: true,
    });

    if (isLoading) {
        return <Loader />
    }

    return (
        <PageWrapper>
            <Container>
                <Box>
                    {/* <Flex justify={"space-between"}>
                        <NavigationButton onClick={() => navigate(`/admin/user/${email}`)} imageProps={{ w: "50px", mr: "10px" }}></NavigationButton>
                    </Flex> */}
                </Box>
                <SectionTitle title="Recurring Series 🗓" text="Let’s turn all your donors into monthly donors." mb="80px" />
                <Box w="50%" mx="auto">
                    {
                        data?.templates?.map((e) => <Box key={e.uniqueID}>
                            <Option to={`/admin/template/${e.uniqueID}`} view={true} viewIcon={viewIcon} mb="30px" >
                                {e.name}
                            </Option>
                        </Box>)
                    }
                </Box>
            </Container>
        </PageWrapper>
    )
}

export default UserTemplates