import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { Greeting, PreviewText, Sender } from '../../Template';
import ImagePreview from '../../UploadImage/ImagePreview';
import PreviewFooter from '../PreviewFooter';
import PreviewHead from '../PreviewHead';
import { PreviewBody } from '../style';



const PreviewTextWrap = styled.span`
    >.slate-text:first-of-type{
        display:inline-block
    }
`
const PreviewTemplateThree = ({ images, image }) => {
    const { user: userState,  master } = useSelector((state) => state);
    const { template3 } = useSelector((state) => state.templates);
    const { logo, salutations, greeting, sender } = master;
    const { beneficiaryName, mainText, beneficiaryHelped, beneficiaryAfter,
        beneficiaryBefore } = template3;

    return (
        <>
            <PreviewHead logo={logo} preview={false} />

            <PreviewBody>
                <Greeting data={greeting} name={userState?.name} />
                {
                    mainText?.length <= 1 && !mainText[0]?.children[0]?.text ?
                        <>
                            <Text>
                                People like you helped{" "}
                                <PreviewTextWrap>
                                <PreviewText data={beneficiaryName} placeholder={'[Beneficiary name]'} />
                                </PreviewTextWrap> by {" "}
                                <PreviewTextWrap>
                                <PreviewText data={beneficiaryHelped} placeholder={'[Describe how they were helped]'} />
                                </PreviewTextWrap>
                            </Text>
                            <Text>
                                {beneficiaryBefore
                                    ? <PreviewText data={beneficiaryBefore} placeholder={'[Describe beneficairy story before you supported them]'} />
                                    : '[Describe beneficairy story before you supported them]'}</Text>

                            <Text>
                                {beneficiaryAfter
                                    ? <PreviewText data={beneficiaryAfter} placeholder={'[Describe beneficairy story after you supported them]'} />
                                    : '[Describe beneficairy story after you supported them]'}
                            </Text>
                        </>
                        :
                        <PreviewText data={mainText} />
                }
                <Box style={{
                    margin: "60px -15px"
                }}>
                    <ImagePreview images={images} templateImage={image} />
                </Box>
                <Text>
                    You may not realise it, but you really are a hero.
                </Text>
                <Text>
                    We thank you from the bottom of our hearts,
                </Text>
                <Sender data={sender} salutations={salutations} name={userState?.name} />
                <PreviewFooter />
            </PreviewBody>
        </>
    )
}

export default PreviewTemplateThree