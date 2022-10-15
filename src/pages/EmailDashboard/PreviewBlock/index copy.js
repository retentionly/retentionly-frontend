import { Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import Greeting from "../../../components/Template/Greeting"
import PreviewText from "../../../components/Template/PreviewText"
import Sender from "../../../components/Template/Sender"
import ImagePreview from "../../../components/UploadImage/ImagePreview"
import { Text30 } from "../../../theme/text"
import { PreviewBody, PreviewFooter, PreviewFrame, PreviewHead, PreviewImageBlock } from "./style"

const PreviewBlock = ({ images, image }) => {

    const { user: userState, template, master } = useSelector((state) => state);
    const { logo, salutations, greeting, sender } = master;
    const { beneficiaryDesc, mainText, serviceDesc } = template;

    return (
        <>
            <PreviewFrame>
                <Text py="30px" textAlign={"center"} color="#000" {...Text30}>Preview</Text>
                <PreviewHead>
                    {logo && <img src={logo} alt="" />}
                </PreviewHead>
                <PreviewImageBlock mb="25px">
                    <ImagePreview images={images} templateImage={image} />
                </PreviewImageBlock>
                <PreviewBody>
                    <Greeting data={greeting} name={userState?.name} />
                    {
                        mainText?.length <= 1 && !mainText[0]?.children[0]?.text ?
                            <>
                                <Text>We wanted to say a huge thank you for your donation to us!</Text>
                                <Text>Without people like you, we wouldn't be able to {serviceDesc ? <PreviewText data={serviceDesc} /> : '[insert service description]'}</Text>
                                <Text>Your donation helps {beneficiaryDesc ? <PreviewText data={beneficiaryDesc} /> : <Text color="#000">[insert beneficiary description]</Text>}</Text>
                                <Text>We thank you from the bottom of our hearts</Text>

                            </>
                            :
                            <PreviewText data={mainText} />
                    }
                    {sender ? <Sender data={sender} salutations={salutations} /> : <Text color="#000">Jamal - CEO</Text>}
                    <PreviewFooter>
                        <Text>
                            Copyright © 2020, Al Isharah, All rights reserved.
                        </Text>
                        <Text>Our mailing address is:
                            info@alisharah.com
                        </Text>
                        <Text>
                            Want to change how you receive these emails?
                            You can update your preferences or unsubscribe from this list.
                        </Text>
                    </PreviewFooter>
                </PreviewBody>
            </PreviewFrame>
        </>
    )
}

export default PreviewBlock