import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListEditor from '../../../components/Editor/ListEditor';
import EditBlock from '../../../components/EditorBlock';
import RequiredText from '../../../components/RequiredText/RequiredText';
import UploadImage from '../../../components/UploadImage/UploadImage';
import { setTemplate5 } from '../../../features/templates/templatesSlice';
import { useGetTemplateQuery } from '../../../features/user/userApi';
import { Text30 } from '../../../theme/text';
import { EditBlockStyled, MainTextBoxStyle } from '../style';

const EditBlockFive = ({ id, onDrop, image, sizeError, tempLoading }) => {
    const dispatch = useDispatch();
    const { data, isLoading, isError, refetch } = useGetTemplateQuery(id, {
        refetchOnMountOrArgChange: true,
    });
    const { template5 } = useSelector(state => state.templates);
    const { preview, subjectLine, serviceDesc, impactStat, mainGoalSummary, donationDoes, mainText } = template5;


    const handleAddorRemoveImpact = (e) => {
        dispatch(setTemplate5({
            ...template5,
            impactStat: e
        }))
    }

    const handlePreview = (e) => {
        dispatch(setTemplate5({
            ...template5,
            preview: e
        }))
    }
 
    const handleSubjectLine = (e) => {
        dispatch(setTemplate5({
            ...template5,
            subjectLine: e
        }))
    }

    const handleServiceDesc = (e) => {
        dispatch(setTemplate5({
            ...template5,
            serviceDesc: e
        }));
    }
    const handleMainGoalSummary = (e) => {
        dispatch(setTemplate5({
            ...template5,
            mainGoalSummary: e
        }));
    }
    const handleDonationDoes = (e) => {
        dispatch(setTemplate5({
            ...template5,
            donationDoes: e
        }));
    }
    const handleMainText = (e) => {
        dispatch(setTemplate5({
            ...template5,
            mainText: e
        }));
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
                    <RequiredText/>
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
                            required={true}
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
                            required={true}
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
                        value={serviceDesc || [
                            {
                                type: "paragaph",
                                children: [{ text: "" }]
                            }
                        ]}
                        required={true}
                    />
                </Box>

                <Box className="impact-statistic">
                    <ListEditor
                        title="Insert impact statistics:"
                        text={`List out the impact your charity has made to build credibility with the recipients.`}
                        placeholder={
                            `E.g. "Feed 1,000 people`}
                        mb="30px"
                        handleAddImpact={handleAddorRemoveImpact}
                        handleRemoveImpact={handleAddorRemoveImpact}
                        // toggleTask={toggleTask}
                        // removeTask={removeTask}
                        item={impactStat}
                        // required={!Boolean(impactStat.length)}
                    />
                </Box>

                <Box className="donation-does">
                    <EditBlock title={"Explain what their donation does:"}
                        text={`Tell your donors what you need funds for.`}
                        inputPlaceholder={`E.g. "provide breakfast to all children".`}
                        mb="30px"
                        onChange={handleDonationDoes}
                        value={donationDoes || [
                            {
                                type: "paragaph",
                                children: [{ text: "" }]
                            }
                        ]} 
                        required={true}
                        />
                </Box>


                <Box className="main-goal-summary">
                    <EditBlock
                        title={"Describe summary of your main goals:"}
                        text={`Tell supporters what you will do with their donations.`}
                        inputPlaceholder={`E.g. "buy cereal, fruits, oats, milk, bowls and spoons
so we can give every child a breakfast".`}
                        mb="30px"
                        onChange={handleMainGoalSummary}
                        value={mainGoalSummary || [
                            {
                                type: "paragaph",
                                children: [{ text: "" }]
                            }
                        ]} 
                        required={true}
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

export default EditBlockFive