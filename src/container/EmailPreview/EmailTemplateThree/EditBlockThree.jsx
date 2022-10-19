import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import EditBlock from '../../../components/EditorBlock'
import UploadImage from '../../../components/UploadImage/UploadImage'
import { useGetTemplateQuery } from '../../../features/template/templateApi'
import { setBeneficiaryAfter, setBeneficiaryBefore, setBeneficiaryHelped, setBeneficiaryName, setMainText, setPreview, setSubjectLine } from '../../../features/template/templateSlice'
import { Text30 } from '../../../theme/text'
import { EditBlockStyled, MainTextBoxStyle } from '../style'

const EditBlockThree = ({ id, onDrop, image, sizeError, tempLoading }) => {
    const dispatch = useDispatch();
    const { data, isLoading, isError, refetch } = useGetTemplateQuery(id, {
        refetchOnMountOrArgChange: true,
    });

    const { preview, subjectLine, beneficiaryName, beneficiaryHelped, beneficiaryBefore, beneficiaryAfter, mainText } = data || {};

    const handleSubjectLine = (e) => {
        dispatch(setSubjectLine(e));
    }
    const handlePreview = (e) => {
        dispatch(setPreview(e));
    }
    const handleBeneficiaryName = (e) => {
        dispatch(setBeneficiaryName(e));
    }
    const handleBeneficiaryHelped = (e) => {
        dispatch(setBeneficiaryHelped(e));
    }
    const handleBeneficiaryBefore = (e) => {
        dispatch(setBeneficiaryBefore(e));
    }
    const handleBeneficiaryAfter = (e) => {
        dispatch(setBeneficiaryAfter(e));
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
                    <UploadImage onDrop={onDrop} accept={"image/*"} image={image} />
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
                            value={subjectLine || [
                                {
                                    type: "paragaph",
                                    children: [{ text: "" }]
                                }
                            ]}
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
                            value={preview || [
                                {
                                    type: "paragaph",
                                    children: [{ text: "" }]
                                }
                            ]}
                        />
                    </Box>
                }

                <Box className="beneficiary-name">
                    <EditBlock
                        title={"Beneficiary Name:"}
                        text={`Introduce your donors to the people/person they have helped.`}
                        inputPlaceholder={`E.g. ‘Jamal’`}
                        mb="30px"
                        onChange={handleBeneficiaryName}
                        value={beneficiaryName || [
                            {
                                type: "paragaph",
                                children: [{ text: "" }]
                            }
                        ]}
                    />
                </Box>


                <Box className="beneficiary-helped">
                    <EditBlock
                        title={"Describe how they were helped:"}
                        text={`Tell your donors how beneficiary benefited from donations. `}
                        inputPlaceholder={`E.g. "by providing him with a healthy breakfast 
everyday before school".`}
                        mb="30px"
                        onChange={handleBeneficiaryHelped}
                        value={beneficiaryHelped || [
                            {
                                type: "paragaph",
                                children: [{ text: "" }]
                            }
                        ]}
                    />
                </Box>


                <Box className="beneficiary-before">
                    <EditBlock
                        title={"Describe beneficairy story before you supported them"}
                        text={`Explain the beneficairy’s situation before
                        you supported them. `}
                        inputPlaceholder={`E.g. "Jamal used to go to school on a empty stomach. 
No breakfeast. No fuel for a busy school day. This had 
a dramatic effect on his grades".`}
                        mb="30px"
                        onChange={handleBeneficiaryBefore}
                        value={beneficiaryBefore || [
                            {
                                type: "paragaph",
                                children: [{ text: "" }]
                            }
                        ]}
                    />
                </Box>


                <Box className="beneficiary-after">
                    <EditBlock
                        title={"Describe beneficairy story after you supported them"}
                        text={`Explain the beneficairy’s situation after you supported them.`}
                        inputPlaceholder={`E.g. "Thanks to donors like you we were able to 
provide Jamal healthy breakfast everyday before 
school. Fuelled properly, his grades started to improve. `}
                        mb="30px"
                        onChange={handleBeneficiaryAfter}
                        value={beneficiaryAfter || [
                            {
                                type: "paragaph",
                                children: [{ text: "" }]
                            }
                        ]}
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

export default EditBlockThree