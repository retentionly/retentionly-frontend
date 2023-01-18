import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditBlock from '../../../components/EditorBlock'
import RequiredText from '../../../components/RequiredText/RequiredText'
import UploadImage from '../../../components/UploadImage/UploadImage'
import { setTemplate1 } from '../../../features/templates/templatesSlice'
import { useGetTemplateQuery } from '../../../features/user/userApi'
import { Text30 } from '../../../theme/text'
import { getPlainText } from '../../../utils/getPlainText'
import { EditBlockStyled, MainTextBoxStyle } from '../style'

const EditBlockOne = ({
    id,
    onDrop,
    sizeError,
    tempLoading,
    error,
    imageError,
    subjectLineError,
    previewError,
    serviceDescError,
    beneficiaryDescError,
    handleSubjectLineError,
    handlePreviewError,
    handleServiceDescError,
    handleBeneficiaryDescError,
}) => {

    const dispatch = useDispatch();
    const { data, isLoading, isError, refetch } = useGetTemplateQuery(id, {
        refetchOnMountOrArgChange: true,
    });

    const { template1 } = useSelector(state => state.templates);

    const { preview, subjectLine, serviceDesc, beneficiaryDesc, mainText } = data || {};

    const handleSubjectLine = (e) => {
        handleSubjectLineError(getPlainText(e))
        dispatch(setTemplate1({
            ...template1,
            subjectLine: e
        }))
    }

    const handlePreview = (e) => {
        handlePreviewError(getPlainText(e))
        dispatch(setTemplate1({
            ...template1,
            preview: e
        }))
    }

    const handleServiceDesc = (e) => {
        handleServiceDescError(getPlainText(e))
        dispatch(setTemplate1({
            ...template1,
            serviceDesc: e
        }))
    }

    const handleBeneficiaryDesc = (e) => {
        handleBeneficiaryDescError(getPlainText(e))
        dispatch(setTemplate1({
            ...template1,
            beneficiaryDesc: e
        }))
    }
    const handleMainText = (e) => {
        dispatch(setTemplate1({
            ...template1,
            mainText: e
        }))
    }

    return (
        <>
            <EditBlockStyled direction={"column"}>
                <Box mb={3} className="upload" id="image">
                    <Heading color="black" fontWeight={400} mb="14px" {...Text30}>Upload Template Image:</Heading>
                    <Box mb="10px" >
                        {
                            sizeError
                                ? <Text color="red" fontWeight="semibold">{sizeError}</Text>
                                : <Text color="#000">Recommended Resolution: (490 * 368)</Text>
                        }
                    </Box>
                    <UploadImage onDrop={onDrop} accept={"image/*"} />
                    {(error && imageError) && <RequiredText />}
                </Box>

                <Box className="subject-line">
                    <EditBlock
                        title={"Subject Line:"}
                        text={`Tell donors your main campaign message.`}
                        inputPlaceholder={`E.g. "provide breakfast to all children".`}
                        mb="30px"
                        onChange={handleSubjectLine}
                        value={template1?.subjectLine}
                        required={error && subjectLineError}
                        id="subject-line"
                    />
                </Box>

                {
                    !tempLoading &&
                    <Box className="preview">
                        <EditBlock
                            title={"Preview:"}
                            text={`Tell donors your main campaign message.`}
                            inputPlaceholder={`E.g. "provide breakfast to all children".`}
                            mb="30px"
                            onChange={handlePreview}
                            value={template1?.preview}
                            required={error && previewError}
                            id="preview"
                        />
                    </Box>
                }

                <Box className="serviceDesc">
                    <EditBlock
                        title={"Insert description of services provided:"}
                        text={`Tell donors what there donation is doing`}
                        inputPlaceholder={`E.g. "provide breakfast to all children".`}
                        mb="30px"
                        onChange={handleServiceDesc}
                        value={template1?.serviceDesc}
                        required={error && serviceDescError}
                        id="serviceDesc"

                    />
                </Box>

                <Box className="beneficiary-description">
                    <EditBlock
                        title="Insert description of 
                    beneficiary:"
                        text={`Tell donors about the people they’re helping E.g. "us provide breakfast to every child".`}
                        inputPlaceholder={`E.g. "provide breakfast to all children".`}
                        mb="30px"
                        onChange={handleBeneficiaryDesc}
                        value={template1?.beneficiaryDesc}
                        required={error && beneficiaryDescError}
                        id="beneficiary-description"
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
                    value={template1?.mainText}
                />
            </MainTextBoxStyle>

        </>
    )
}

export default EditBlockOne