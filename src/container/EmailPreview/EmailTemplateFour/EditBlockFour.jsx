import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListEditor from '../../../components/Editor/ListEditor';
import EditBlock from '../../../components/EditorBlock';
import RequiredText from '../../../components/RequiredText/RequiredText';
import UploadImage from '../../../components/UploadImage/UploadImage';
import { setTemplate4 } from '../../../features/templates/templatesSlice';
import { useGetTemplateQuery } from '../../../features/user/userApi';
import { Text20, Text30 } from '../../../theme/text';
import RegularTextbox from '../../../ui/RegularTextbox/RegularTextbox';
import { getPlainText } from '../../../utils/getPlainText';
import { EditBlockStyled, MainTextBoxStyle } from '../style';

const EditBlockFour = ({
    id,
    onDrop,
    image,
    sizeError,
    tempLoading,
    imageError,
    subjectLineError,
    previewError,
    socialMediaBenefitError,
    facebookLinkError,
    instagramLinkError,
    handleSubjectLineError,
    handlePreviewError,
    handleFacebookLinkError,
    handleInstagramLinkError,
    handleSocialMediaBenefitError,
    error
}) => {
    const dispatch = useDispatch();
    const { data, isLoading, isError, refetch } = useGetTemplateQuery(id, {
        refetchOnMountOrArgChange: true,
    });

    const { template4 } = useSelector((state) => state.templates);
    const { preview, subjectLine, socialMediaBenefit, social, mainText } = template4;

    const handleSubjectLine = (e) => {
        handleSubjectLineError(getPlainText(e));
        dispatch(setTemplate4({
            ...template4,
            subjectLine: e
        }));
    }
    const handlePreview = (e) => {
        handlePreviewError(getPlainText(e));
        dispatch(setTemplate4({
            ...template4,
            preview: e
        }))
    }
    const handleMainText = (e) => {
        dispatch(setTemplate4({
            ...template4,
            mainText: e

        }));
    }

    const handleAddBenefit = (e) => {
        dispatch(setTemplate4({
            ...template4,
            socialMediaBenefit: e
        }))
        handleSocialMediaBenefitError(socialMediaBenefit)
    }
    const handleRemoveBenefit = (e) => {
        dispatch(setTemplate4({
            ...template4,
            socialMediaBenefit: e
        }))
        handleSocialMediaBenefitError(socialMediaBenefit)
    }

    const handleFacebookLink = (e) => {
        dispatch(setTemplate4({
            ...template4,
            social: {
                ...social,
                facebookLink: e.target.value
            }
        }));
        handleFacebookLinkError(e.target.value)
    }

    const handleInstagramLink = (e) => {
        dispatch(setTemplate4({
            ...template4,
            social: {
                ...social,
                instagramLink: e.target.value
            }
        }));
        handleInstagramLinkError(e.target.value)
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
                    {(error && imageError) && <RequiredText />}
                </Box>

                <Box className="subject-line">
                    <EditBlock

                        title={"Subject Line:"}
                        text={`Tell donors your main campaign message,
                        E.g. "Your gift could change a child’s life".`}
                        inputPlaceholder={`E.g. "provide breakfast to all children".`}
                        mb="30px"
                        onChange={handleSubjectLine}
                        value={subjectLine || [
                            {
                                type: "paragaph",
                                children: [{ text: "" }]
                            }
                        ]}
                        required={error && subjectLineError}
                    />
                </Box>


                <Box className="preview">
                    <EditBlock
                        title={"Preview:"}
                        text={`Tell donors your main campaign message. 
                        E.g. "Your gift could change a child’s life".`}
                        inputPlaceholder={`E.g. "provide breakfast to all children".`}
                        mb="30px"
                        onChange={handlePreview}
                        value={preview || [
                            {
                                type: "paragaph",
                                children: [{ text: "" }]
                            }
                        ]}
                        required={error && previewError}
                    />
                </Box>

                <Box className="social-media-benefit">
                    <ListEditor
                        title="Insert benefits of following 
                        your social media account"
                        text={`List down why we should follow you
                        social media pages.`}
                        placeholder={`
E.g. ‘It’s a great way to keep 
up to date with
 your donation.”`}
                        mb="30px"
                        handleAddImpact={handleAddBenefit}
                        handleRemoveImpact={handleRemoveBenefit}
                        item={socialMediaBenefit}
                        required={error && socialMediaBenefitError}
                    />
                </Box>

                <Box mb="30px">
                    <Heading color="black" fontWeight={400} mb="14px" {...Text30}>
                        Social Media Links
                    </Heading>
                    <Text {...Text20} color="black" mb="14px">
                        Share the URL for your Facebook and
                        Instagram page.
                    </Text>
                    <RegularTextbox
                        title="Facebook"
                        handleChange={handleFacebookLink}
                        placeholder="Insert Facebook Link"
                        required={error && facebookLinkError}
                    />
                    <RegularTextbox
                        title="Instagram"
                        handleChange={handleInstagramLink}
                        placeholder="Insert Instagram Link"
                        required={error && instagramLinkError}
                    />
                </Box>
            </EditBlockStyled>

            <MainTextBoxStyle className="main-text">
                <EditBlock
                    title={"Main Text:"}
                    text={`If you want to edit any of part of the email or rewrite it altogether here’s your chance.`}
                    inputPlaceholder={`E.g. "provide breakfast to all children".`}
                    mb="30px"
                    onChange={handleMainText}
                    value={mainText || [
                        {
                            type: "paragaph",
                            children: [{ text: "" }]
                        }
                    ]}
                />
            </MainTextBoxStyle>

        </>
    )
}

export default EditBlockFour