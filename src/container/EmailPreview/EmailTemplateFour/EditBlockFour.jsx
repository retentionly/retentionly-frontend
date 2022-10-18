import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import EditBlock from '../../../components/EditorBlock';
import UploadImage from '../../../components/UploadImage/UploadImage';
import { useGetTemplateQuery } from '../../../features/template/templateApi';
import { setMainText, setPreview, setSocial, setSocialMediaBenefit, setSubjectLine } from '../../../features/template/templateSlice';
import { Text20, Text30 } from '../../../theme/text';
import RegularTextbox from '../../../ui/RegularTextbox/RegularTextbox';
import { EditBlockStyled, MainTextBoxStyle } from '../style';

const EditBlockFour = ({ id, onDrop, image, sizeError, tempLoading }) => {
    const dispatch = useDispatch();
    const { data, isLoading, isError, refetch } = useGetTemplateQuery(id, {
        refetchOnMountOrArgChange: true,
    });
    console.log('data', data)
    const { preview, subjectLine, socialMediaBenefit, social, mainText } = data || {};

    const handleSubjectLine = (e) => {
        dispatch(setSubjectLine(e));
    }
    const handlePreview = (e) => {
        dispatch(setPreview(e));
    }
    const handleMainText = (e) => {
        dispatch(setMainText(e));
    }
    const handleSocialMediaBenefit = (e) => {
        dispatch(setSocialMediaBenefit(e));
    }
    const handleFacebookLink = (e) => {
        dispatch(setSocial({
            facebookLink: e.target.value,
            instagramLink: social?.instagramLink
        }))
    }
    const handleInstagramLink = (e) => {
        dispatch(setSocial({
            facebookLink: social?.facebookLink,
            instagramLink: e.target.value
        }))
    }

    return (
        <>
            <EditBlockStyled direction={"column"}>
                <Box mb={3} className="upload">
                    <Heading color="black" fontWeight={400} mb="14px" {...Text30}>Upload Template Image:</Heading>
                    <Box mb="10px" >
                        {
                            sizeError
                                ? <Text color="red" fontWeight="semibold">{sizeError}</Text>
                                : <Text color="#000">Recommended Resolution: (490 * 368)</Text>

                        }
                    </Box>
                    <UploadImage onDrop={onDrop} accept={"image/*"} image={image} />
                </Box>
                {
                    !tempLoading &&
                    <Box className="subject-line">
                        <EditBlock

                            title={"Subject Line:"}
                            text={`Tell donors your main campaign message,
                        E.g. "Your gift could change a child’s life".`}
                            inputPlaceholder={`E.g. "provide breakfast to all children".`}
                            mb="30px"
                            onChange={handleSubjectLine}
                            value={subjectLine}
                        />
                    </Box>
                }
                {
                    !tempLoading &&
                    <Box className="preview">
                        <EditBlock
                            title={"Preview:"}
                            text={`Tell donors your main campaign message. 
                        E.g. "Your gift could change a child’s life".`}
                            inputPlaceholder={`E.g. "provide breakfast to all children".`}
                            mb="30px"
                            onChange={handlePreview}
                            value={preview}
                        />
                    </Box>
                }
                {
                    socialMediaBenefit &&
                    <Box className="social-media-benefit">
                        <EditBlock
                            title={"Insert benefits of following your social media account"}
                            text={`List down why we should follow you
                        social media pages.`}
                            inputPlaceholder={`E.g. ‘1. It’s a great way to keep up to 
                        date with your donation.
                        2. It’s free!”`}
                            mb="30px"
                            onChange={handleSocialMediaBenefit}
                            value={socialMediaBenefit}
                        />
                    </Box>
                }
                {
                    social &&
                    <Box mb="30px">
                        <Heading color="black" fontWeight={400} mb="14px" {...Text30}>
                            Social Media Links
                        </Heading>
                        <Text {...Text20} color="black" mb="14px">
                            Share the URL for your Facebook and
                            Instagram page.
                        </Text>
                        <RegularTextbox title="Facebook" handleChange={handleFacebookLink} placeholder="Insert Facebook Link" />
                        <RegularTextbox title="Instagram" handleChange={handleInstagramLink} placeholder="Insert Instagram Link" />
                    </Box>
                }
            </EditBlockStyled>
            <MainTextBoxStyle className="main-text">
                <EditBlock
                    title={"Main Text:"}
                    text={`If you want to edit any of part of the email or rewrite it altogether here’s your chance.`}
                    inputPlaceholder={`E.g. "provide breakfast to all children".`}
                    mb="30px"
                    onChange={handleMainText}
                    value={mainText || []}
                />
            </MainTextBoxStyle>
        </>
    )
}

export default EditBlockFour