import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import EditBlock from '../../../components/EditorBlock'
import UploadImage from '../../../components/UploadImage/UploadImage'
import { useGetTemplateQuery } from '../../../features/template/templateApi'
import { setBeneficiaryDesc, setMainText, setPreview, setServiceDesc, setSubjectLine } from '../../../features/template/templateSlice'
import { Text30 } from '../../../theme/text'
import { EditBlockStyled, MainTextBoxStyle } from '../style'

const EditBlockOne = ({ id, onDrop, images, sizeError, tempLoading }) => {
    const dispatch = useDispatch();
    const { data, isLoading, isError, refetch } = useGetTemplateQuery(id, {
        refetchOnMountOrArgChange: true,
    });

    const { preview, subjectLine, serviceDesc, beneficiaryDesc, mainText } = data || {};

    const handleSubjectLine = (e) => {
        dispatch(setSubjectLine(e));
    }
    const handlePreview = (e) => {
        dispatch(setPreview(e));
    }
    const handleServiceDesc = (e) => {
        dispatch(setServiceDesc(e));
    }

    const handleBeneficiaryDesc = (e) => {
        dispatch(setBeneficiaryDesc(e));
    }
    const handleMainText = (e) => {
        dispatch(setMainText(e));
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
                    <UploadImage onDrop={onDrop} accept={"image/*"} />
                </Box>

                {
                    !tempLoading &&
                    <Box className="subject-line">
                        <EditBlock
                            title={"Subject Line:"}
                            text={`Tell donors your main campaign message.`}
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
                            text={`Tell donors your main campaign message.`}
                            inputPlaceholder={`E.g. "provide breakfast to all children".`}
                            mb="30px"
                            onChange={handlePreview}
                            value={preview}
                        />
                    </Box>
                }
                {
                    serviceDesc &&
                    <Box className="serviceDesc">
                        <EditBlock
                            title={"Insert description of services provided:"}
                            text={`Tell donors what there donation is doing`}
                            inputPlaceholder={`E.g. "provide breakfast to all children".`}
                            mb="30px"
                            onChange={handleServiceDesc}
                            value={serviceDesc}
                        />
                    </Box>
                }
                {
                    beneficiaryDesc &&
                    <Box className="beneficiary-description">
                        <EditBlock
                            title="Insert description of 
                    beneficiary:"
                            text={`Tell donors about the people they’re helping E.g. "us provide breakfast to every child".`}
                            inputPlaceholder={`E.g. "provide breakfast to all children".`}
                            mb="30px"
                            onChange={handleBeneficiaryDesc}
                            value={beneficiaryDesc || []}
                        />
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

export default EditBlockOne