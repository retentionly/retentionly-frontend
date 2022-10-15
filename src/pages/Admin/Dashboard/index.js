import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import viewIcon from "../../../assets/png/view.png"
import { useGetAdminQuery } from '../../../features/admin/adminApi'
import { useGetUsersQuery } from '../../../features/user/userApi'
import auth from '../../../firebase.init'
import Loader from '../../../ui/Loaders/Loading'
import Option from '../../../ui/OptionButton'
import { PageWrapper } from '../../../ui/PageWrapper'
import SectionTitle from '../../../ui/SectionTitle'

const Dashboard = () => {

    const [user, loading] = useAuthState(auth);
    const { data, isLoading, isError } = useGetUsersQuery();
    const { data: adminData, isLoading: adminLoading, isError: adminError } = useGetAdminQuery(user?.email);

    if (isLoading || adminLoading) {
        return <Loader />
    }

    return (
        <PageWrapper>
            <Container>
                <SectionTitle title="Users List 👥" text="Your Dashboard where you can find everything your looking for." mb="80px" />
                <Box maxW="400px" mx="auto">
                    {
                        data?.map((e) => {
                            if (e.email === user?.email) {
                                return null
                            } else {
                                return <Box key={e.uniqueID}>
                                    <Option view={true} viewIcon={viewIcon}  to={`/admin/user/${e.email}`} mb="30px">
                                        Client: {e.email}
                                    </Option>
                                </Box>
                            }
                        })
                    }
                </Box>
            </Container>
        </PageWrapper>
    )
}

export default Dashboard