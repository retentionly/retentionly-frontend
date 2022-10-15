import { Flex, Modal, ModalBody, ModalContent, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { Text25 } from "../../theme/text";

const EmailUpdatedModal = ({ showModal, setShowModal, updated, setUpdated }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        if (showModal) {
            onOpen()
        }
        if (updated) {
            onClose()
        }
    }, [showModal, onOpen, onClose])

    return (
        <>
            <Modal onClose={() => {
                setShowModal(false)
                setUpdated(false)
                onClose()
            }} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody border='1px' borderColor='gray.100' p='10'>
                        <Flex alignItems="center" flexDirection="column">
                            <Text {...Text25}>Saving...</Text>
                            <img maxW="200px" src="/image/preloader.gif" alt="" />
                        </Flex>
                    </ModalBody>
                    {/*
                        loader &&
                        <>
                            <ModalBody border='1px' borderColor='gray.100' p='10'>
                                <Flex alignItems="center" flexDirection="column"> 
                                    <Text {...Text25}>Saving...</Text>
                                    <img maxW="200px" src="/image/preloader.gif" alt="" />
                                </Flex>
                            </ModalBody>
                        </>
        */}
                    {/*
                        updated &&
                        <>
                            <ModalHeader>Success</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody border='1px' borderColor='gray.100' p='10'>
                                <Box textAlign='center'>
                                    <Text mb='4' {...Text25}>
                                        Your {item} Is Updated!!!
                                    </Text>
                                    <Flex justifyContent='space-around'>
                                        <Link to="/emails" className="underline">
                                            <Button color='teal'>
                                                Go To Dashboard
                                            </Button>
                                        </Link>
                                    </Flex>
                                </Box>
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={() => {
                                    setShowModal(false)
                                    setUpdated(false)
                                    setLoader(false)
                                    onClose()
                                }}>Close</Button>
                            </ModalFooter>
                        </>
                            */}

                </ModalContent>
            </Modal>
        </>
    )
}

export default EmailUpdatedModal