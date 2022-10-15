import { Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { PreviewBodyFive, PreviewBodyFour, PreviewBodyOne, PreviewBodyThree, PreviewBodyTwo } from "../../../components/EmailPreviews"
import { Text30 } from "../../../theme/text"
import { PreviewFrame } from "./style"

const PreviewBlock = ({ images, image }) => {

    const { template } = useSelector((state) => state);
    const { ref } = template;

    return (
        <>
            <PreviewFrame>
                <Text py="30px" textAlign={"center"} color="#000" {...Text30}>Preview</Text>

                {
                    ref === 'template_1' && <PreviewBodyOne images={images} image={image} />
                }
                {
                    ref === 'template_2' && <PreviewBodyTwo images={images} image={image} />
                }
                {
                    ref === 'template_3' && <PreviewBodyThree images={images} image={image} />
                }
                {
                    ref === 'template_4' && <PreviewBodyFour images={images} image={image} />
                }
                {
                    ref === 'template_5' && <PreviewBodyFive images={images} image={image} />
                }
            </PreviewFrame>
        </>
    )
}

export default PreviewBlock