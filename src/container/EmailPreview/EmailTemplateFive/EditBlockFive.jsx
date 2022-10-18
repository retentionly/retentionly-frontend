import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import ListEditor from '../../../components/Editor/ListEditor';
import EditBlock from '../../../components/EditorBlock';
import UploadImage from '../../../components/UploadImage/UploadImage';
import { useGetTemplateQuery } from '../../../features/template/templateApi';
import { setDonationDoes, setMainGoalSummary, setMainText, setPreview, setServiceDesc, setSubjectLine } from '../../../features/template/templateSlice';
import { Text30 } from '../../../theme/text';
import { EditBlockStyled, MainTextBoxStyle } from '../style';

const EditBlockFive = ({ id, onDrop, image, sizeError, tempLoading }) => {
    const dispatch = useDispatch();
    const { data, isLoading, isError, refetch } = useGetTemplateQuery(id, {
        refetchOnMountOrArgChange: true,
    });
    const { preview, subjectLine, serviceDesc, impactStat, mainGoalSummary, donationDoes, mainText } = data || {};

    const handlePreview = (e) => {
        dispatch(setPreview(e));
    }
    const handleSubjectLine = (e) => {
        dispatch(setSubjectLine(e));
    }
    const handleServiceDesc = (e) => {
        dispatch(setServiceDesc(e));
    }
    const handleMainGoalSummary = (e) => {
        dispatch(setMainGoalSummary(e));
    }
    const handleDonationDoes = (e) => {
        dispatch(setDonationDoes(e));
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
                            value={preview} />
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
                {impactStat &&
                    <Box className="impact-statistic">
                        <ListEditor
                            title="Insert impact statistics:"
                            text={`List out the impact your charity has made to build credibility with the recipients.`}
                            placeholder={
                                `E.g. "Feed 1,000 people`}
                            mb="30px"
                            data={impactStat}
                            impact={true}
                        />
                    </Box>
                }
                {
                    donationDoes &&
                    <Box className="donation-does">
                        <EditBlock title={"Explain what their donation does:"}
                            text={`Tell your donors what you need funds for.`}
                            inputPlaceholder={`E.g. "provide breakfast to all children".`}
                            mb="30px"
                            onChange={handleDonationDoes}
                            value={donationDoes} />
                    </Box>
                }
                {
                    mainGoalSummary &&
                    <Box className="main-goal-summary">
                        <EditBlock
                            title={"Describe summary of your main goals:"}
                            text={`Tell supporters what you will do with their donations.`}
                            inputPlaceholder={`E.g. "buy cereal, fruits, oats, milk, bowls and spoons
so we can give every child a breakfast".`}
                            mb="30px"
                            onChange={handleMainGoalSummary}
                            value={mainGoalSummary} />
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
                    value={mainText}
                />
            </MainTextBoxStyle>
        </>
    )
}

export default EditBlockFive