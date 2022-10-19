import { Box, Button as TooltipButton, Container, Flex, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as HintIcon } from "../../assets/svg/hint-icon.svg"
import Button from '../../components/Common/Button'
import Error from '../../components/Error/Error'
import { useGetTemplatesQuery } from '../../features/template/templateApi'
import auth from '../../firebase.init'
import Loader from '../../ui/Loaders/Loading'
import Option from '../../ui/OptionButton'
import { PageWrapper } from '../../ui/PageWrapper'
import SectionTitle from '../../ui/SectionTitle'

const editiconStyle = {
    w: "75px",
    ml: "20px"
}

const EmailFinal = () => {
    const navigate = useNavigate()
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

                <SectionTitle title="Recurring Series 🗓" text="Let’s turn all your donors into monthly donors." mb="80px" />
                <Box maxW="500px" mx="auto">
                    {
                        data?.templates?.map((e, i) => <Box key={e.uniqueID}>
                            <Option editiconProps={editiconStyle} editicon="true" deleteicon="true" deleteid={e.uniqueID} to={`/email/${i + 1}`} mb="30px">
                                {e.name}
                            </Option>
                        </Box>)
                    }
                </Box>
                <Flex maxW="450px" mx="auto" alignItems="center">
                    <Box px="15px" width="100%" cursor="pointer">
                        <Button onClick={() => {
                            navigate('/appointment')
                        }} btnProps={{ width: "100%" }}>
                            Book A Call
                        </Button>
                    </Box>
                    <Box ml="10px">
                        {/* <Tooltip label={'To launch your first donor journey please book a call with our team. This way we can connect this journey with your CRM and website so you can track your results. 🧮'} color='white'>
                            <HintIcon />
                        </Tooltip> */}
                        <Tooltip label={'To launch your first donor journey please book a call with our team. This way we can connect this journey with your CRM and website so you can track your results. 🧮'} hasArrow shouldWrapChildren placement='right' textAlign="center" borderRadius="lg" p="10px">
                            <TooltipButton bg="none" _hover={{ bg: 'none' }} borderRadius='0'>
                                <HintIcon />
                            </TooltipButton>
                        </Tooltip>
                    </Box>
                </Flex>
            </Container>
        </PageWrapper >
    )
}

export default EmailFinal