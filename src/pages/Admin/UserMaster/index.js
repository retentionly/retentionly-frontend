import { Box, Button, Container, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useClipboard } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { saveAs } from 'file-saver'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PreviewText from '../../../components/Template/PreviewText'
import { useGetMasterQuery } from '../../../features/master/masterApi'
import Loader from '../../../ui/Loaders/Loading'
import { PageWrapper } from '../../../ui/PageWrapper'
import SectionTitle from '../../../ui/SectionTitle'
import { getPlainText } from '../../../utils/getPlainText'

const TextStyled = styled('span')`
font-size: 18px;
    font-weight: 500;
p {
    font-size: 20px;
}
`

const Header = styled('p')`
font-size: 16px;
font-weight: 700;
padding-bottom: 10px;

`

const TextTruncate = styled('div')`
max-width: 100px;
width: 100%;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
`

const UserMaster = () => {
    const { email } = useParams();
    const navigate = useNavigate();

    const { data, isLoading, isError } = useGetMasterQuery(email);
    const { logo, greeting, salutations, sender, url } = data?.master || {}
    
    if (isLoading) {
        return <Loader />
    }

    const urlText = url[0]?.children[0]?.text;
    const link = urlText && (urlText?.includes("https://") ? urlText : `https://${urlText}`)

    const downloadImage = () => {
        saveAs(logo, 'image.jpg')
    }

    const greetingText = getPlainText(greeting);
    const salutationsText = getPlainText(salutations);
    const senderText = getPlainText(sender);

    return (
        <PageWrapper>
            <Container>
                {/* <Flex justify={"space-between"} >
                    <NavigationButton imageProps={{ w: "50px", mr: "10px" }} onClick={() => navigate(-1)}>
                    </NavigationButton>
                </Flex> */}
                <SectionTitle title="Master" text="These certains elements will be on all your donations. 
        So to make it easier, you can do in on go." mb="80px" maxW="730px" mx="auto" />
                <Flex color='white' justifyContent={"space-around"} alignItems="center">
                    <Box color="#000">
                        <TableContainer border="1px" borderColor="gray.300" borderRadius="10px" p="40px">
                            <Table variant='simple' minW="700px">
                                <Thead>
                                    <Tr>
                                        <Th>
                                            <Header>
                                                Title
                                            </Header>
                                        </Th>
                                        <Th>
                                            <Header>
                                                Value
                                            </Header>
                                        </Th>
                                        <Th w="20%">
                                            <Header>
                                                Action
                                            </Header>
                                        </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>
                                            <TextStyled>
                                                Logo
                                            </TextStyled>
                                        </Td>
                                        <Td>
                                            <Box maxW="75px">
                                                <img src={logo} alt="logo" />
                                            </Box>
                                        </Td>
                                        <Td>
                                            <Button onClick={downloadImage} disabled={!logo} type="button">
                                                download
                                            </Button>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <TextStyled>
                                                Greeting
                                            </TextStyled>
                                        </Td>
                                        <Td>
                                            <PreviewText data={greeting} placeholder={'Nothing Inserted'} />
                                        </Td>
                                        <Td>
                                            <CopyText value={greetingText} />
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <TextStyled>
                                                Salutations
                                            </TextStyled>
                                        </Td>
                                        <Td>
                                            <PreviewText data={salutations} placeholder={'Nothing Inserted'} />
                                        </Td>
                                        <Td>
                                            <CopyText value={salutationsText} />
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <TextStyled>
                                                Sender
                                            </TextStyled>
                                        </Td>
                                        <Td>
                                            <PreviewText data={sender} placeholder={'Nothing Inserted'} />
                                        </Td>
                                        <Td>
                                            <CopyText value={senderText} />
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <TextStyled>
                                                URL
                                            </TextStyled>
                                        </Td>
                                        <Td>
                                            <TextTruncate>
                                                <span>{link || 'Nothing Inserted'}</span>
                                            </TextTruncate>
                                        </Td>
                                        <Td>
                                            <CopyText value={link} />
                                        </Td>
                                    </Tr>

                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Flex>
            </Container>
        </PageWrapper>
    )
}

export default UserMaster

const CopyText = ({ value }) => {

    const { hasCopied, onCopy } = useClipboard(value);

    return (
        <Button onClick={onCopy} disabled={!value}>
            {hasCopied ? 'Copied' : 'Copy Value'}
        </Button>
    )
}
