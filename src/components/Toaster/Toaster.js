import { useToast, Wrap } from "@chakra-ui/react";
import { useEffect } from "react";

const Toaster = ({ open, message, status }) => {
    const toast = useToast()

    useEffect(() => {
        if (open) {
            toast({
                title: `${message ? message : 'something went wrong'}`,
                position: 'top-center',
                isClosable: true,
                duration: 1000,
                status: status,
            })
        }
    })

    return (
        <Wrap>
        </Wrap>
    )
}

export default Toaster