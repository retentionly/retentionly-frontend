import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditBlock from '../../../components/EditorBlock'
import UploadImage from '../../../components/UploadImage/UploadImage'
import { setTemplate3 } from '../../../features/templates/templatesSlice'
import { useGetTemplateQuery } from '../../../features/user/userApi'
import { Text30 } from '../../../theme/text'
import { EditBlockStyled, MainTextBoxStyle } from '../style'

const EditBlockThree = ({ id, onDrop, image, sizeError, tempLoading }) => {
    const dispatch = useDispatch();
    const { data, isLoading, isError, refetch } = useGetTemplateQuery(id, {
        refetchOnMountOrArgChange: true,
    });
    const { template3 } = useSelector(state => state.templates);
    const { preview, subjectLine, beneficiaryName, beneficiaryHelped, beneficiaryBefore, beneficiaryAfter, mainText } = data || {};

    const handleSubjectLine = (e) => {
        dispatch(setTemplate3({
            ...template3,
            subjectLine: e
        }))
    }
    const handlePreview = (e) => {
        dispatch(setTemplate3({
            ...template3,
            preview: e
        }))
    }
    const handleBeneficiaryName = (e) => {
        dispatch(setTemplate3({
            ...template3,
            beneficiaryName: e
        }))
    }
    const handleBeneficiaryHelped = (e) => {
        dispatch(setTemplate3({
            ...template3,
            beneficiaryHelped: e
        }))
    }
    const handleBeneficiaryBefore = (e) => {
        dispatch(setTemplate3({
            ...template3,
            beneficiaryBefore: e
        }))
    }
    const handleBeneficiaryAfter = (e) => {
        dispatch(setTemplate3({
            ...template3,
            beneficiaryAfter: e
        }))
    }

    const handleMainText = (e) => {
        dispatch(setTemplate3({
            ...template3,
            mainText: e
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
                        title={"Describe  story before you supported them"}
                        text={`Explain the beneficiary’s situation before
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
                        title={"Describe beneficiary story after you supported them"}
                        text={`Explain the beneficiary’s situation after you supported them.`}
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