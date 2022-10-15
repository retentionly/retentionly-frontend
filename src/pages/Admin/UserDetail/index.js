import { Box, Container, Flex, Text, useRadioGroup } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import viewIcon from "../../../assets/png/view.png"
import Loader from '../../../ui/Loaders/Loading'
import SectionTitle from '../../../ui/SectionTitle'
import { useGetUserAdminQuery } from '../../../features/user/userApi'
import { Text25 } from '../../../theme/text'
import Option from '../../../ui/OptionButton'
import { PageWrapper } from '../../../ui/PageWrapper'

const btnStyle = {
    w: "100%",
    bg: "#000",
    color: "#fff",
    textAlign: "center",
    justify: "center",
    align: "center",
    fontSize: "18px",
    h: "68px",
    _hover: {
        bg: "#000"
    }
}

const UserDetail = () => {
    const { email } = useParams();
    const [active, setActive] = useState(false);
    const { data, isLoading, isError } = useGetUserAdminQuery(email)

    const navigate = useNavigate();
    const [selected, setSelected] = useState(false)

    const options = [
        // {
        //     label:"Welcome Series",
        //     hint:"",
        //     isDisabled:true,
        // },
        // {
        //     label:"Conversion Series",
        //     hint:"",
        //     isDisabled:true,
        // },
        {
            label: "Recurring Series",
            hint: "Hint Text",
            isDisabled: false,
            isChecked: true
        }
    ]

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: 'react',
    })

    const group = getRootProps()
    if (isLoading) {
        return <Loader />
    }

    return (
        <PageWrapper minH="calc(100vh - 70px)">
            <Container>
                {/* <NavigationButton onClick={() => navigate(-1)} imageProps={{ w: "50px", mr: "10px" }}>
                </NavigationButton> */}
                <Flex justifyContent="center">
                    <SectionTitle title={`User Donor Journey 🛺`} mb="50px"/>
                </Flex>
                <Box maxW="400px" mx="auto" mb="50px">
                    <Text {...Text25} mb="20px">Goals:</Text>
                    <Option view={true} viewIcon={viewIcon} to={`/admin/templates/${email}`} mb="30px">
                        Recurring Series
                    </Option>
                </Box>
                <Box maxW="400px" mx="auto" >
                    <Text {...Text25} mb="20px">Master page:</Text>
                    <Option view={true} viewIcon={viewIcon} to={`/admin/master/${email}`} mb="30px">
                        Master Page
                    </Option>
                </Box>
            </Container>
        </PageWrapper>
    )
}

export default UserDetail
/* 
onClick={() => navigate(`/admin/master/${email}`)}
onClick={() => navigate(`/admin/templates/${email}`)}
*/


/* 

<NavigationButton onClick={() => navigate(-1)} imageProps={{ w: "50px", mr: "10px" }}>
                    </NavigationButton>
                <Flex  justifyContent="center">
                   
                    <SectionTitle title={`User Donor Journey 👁️`} />
                </Flex>
                <Box maxW="400px" mx="auto" mb="50px">
                    <Text {...Text25} mb="20px">Your Donor Journey:</Text>
                    <Option view={true} viewIcon={viewIcon} to={`/admin/user/`} mb="30px">
                        Recurring Series
                    </Option>
                </Box>
                <Box maxW="400px" mx="auto" >
                    <Text {...Text25} mb="20px">Master page:</Text>
                    <Option view={true} viewIcon={viewIcon} to={`/admin/user/`} mb="30px">
                        Recurring Series
                    </Option>
                </Box>
            </Container>
*/