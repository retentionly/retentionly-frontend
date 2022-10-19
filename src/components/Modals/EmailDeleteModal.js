import { Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import trashIcon from "../../assets/png/trash.png";
import { useDeleteTemplateMutation } from "../../features/user/userApi";

import { Text20 } from "../../theme/text";

const deleteBtnStyle = {
    w: "100px",
    background: 'none',
    _hover: {
        background: 'none'
    },
    _active: {
        background: 'none'
    },
}

const EmailDeleteModal = ({ deleteid, refetch }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [deleteTemplate, { data, isLoading, isError, isSuccess }] = useDeleteTemplateMutation();

    if (isSuccess) {
        refetch()
    }

    return (
        <>
            <Button {...deleteBtnStyle} onClick={onOpen}>
                <img src={trashIcon} alt="icon" />
            </Button>
            <Modal onClose={() => {
                onClose()
            }} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent border="2px" borderColor="red">
                    <ModalHeader color="red">Danger!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody border='1px' borderColor='gray.100' p='10'>
                        {
                            isLoading &&
                            <Text>Loading</Text>
                        }
                        {
                            (!data && !isLoading) &&
                            <Box Box textAlign='center'>
                                <Text mb='4' {...Text20} fontWeight="semibold" color="">
                                    Are You Sure You Want To Delete This Template?
                                </Text>
                                <Flex justifyContent='space-around'>
                                    <Button color='white' bg="red" _hover={{ bg: 'red.500' }} onClick={() => deleteTemplate(deleteid)}>
                                        Delete
                                    </Button>
                                </Flex>
                            </Box>
                        }
                        {
                            (isSuccess && !isLoading) &&
                            <Text>
                                Template Deleted
                            </Text>
                        }
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={() => {
                            onClose()
                        }}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EmailDeleteModal

