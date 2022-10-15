import { Box, Text } from "@chakra-ui/react";
// import { ReactComponent as UploadLogo } from "../../assets/svg/upload.svg";

import UploadImageSingle from "../../components/UploadImage/UploadImageSingle";
import { Text30 } from "../../theme/text";

const EditingBlockLeft = ({ images, onDrop, sizeError }) => {

    return (
        <>
            <Box mb="40px">
                <Text color="#000000" {...Text30} mb="30px">
                    Upload Your Logo:
                </Text>
            </Box>
            <Box>
                <UploadImageSingle onDrop={onDrop} accept={"image/*"} />
            </Box>
        </>
    )
}

export default EditingBlockLeft
