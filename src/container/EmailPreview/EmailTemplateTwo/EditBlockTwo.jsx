import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListEditor from "../../../components/Editor/ListEditor";
import EditBlock from '../../../components/EditorBlock';
import UploadImage from '../../../components/UploadImage/UploadImage';
import { setTemplate2 } from '../../../features/templates/templatesSlice';
import { Text30 } from '../../../theme/text';
import { EditBlockStyled, MainTextBoxStyle } from '../style';

const EditBlockTwo = ({ id, onDrop, image, sizeError, tempLoading }) => {

    const dispatch = useDispatch();
    const { template2 } = useSelector(state => state.templates);
    const { preview, subjectLine, mainText, impactStat, donationFor, donationGoesFor } = template2 || {};
    // const { addTask, toggleTask, removeTask, item } = useTodo(impactStat);

    const handleAddImpact = (e) => {
    
        // addTask(e);
        dispatch(setTemplate2({
            ...template2,
            impactStat: e
        }))
    }

    // const handleAddImpact = (e) => {
    //     addTask(e);
    //     // dispatch(setTemplate2({
    //     //     ...template2,
    //     //     impactStat: [...item, { text: e} ]
    //     // }))
    // }
    // ([...tasks, { text: text }]

    const handleSubjectLine = (e) => {
        dispatch(setTemplate2({
            ...template2,
            subjectLine: e
        }))
    }

    const handlePreview = (e) => {
        dispatch(setTemplate2({
            ...template2,
            preview: e
        }))
    }

    const handleMainText = (e) => {
        dispatch(setTemplate2({
            ...template2,
            mainText: e
        }))
    }
    const handleDonationFor = (e) => {
        dispatch(setTemplate2({
            ...template2,
            donationFor: e
        }))
    }
    const handleDonationGoesFor = (e) => {
        dispatch(setTemplate2({
            ...template2,
            donationGoesFor: e
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
                        value={subjectLine}
                    />
                </Box>

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

                <Box className="impact-statistic">
                    <ListEditor
                        title="Insert impact statistics:"
                        text={`List out the impact your charity has made to build credibility with the recipients.`}
                        placeholder={
                            `E.g. "Feed 1,000 people`}
                        mb="30px"
                        // data={impactStat || []}
                        // impact={true}
                        handleAddImpact={handleAddImpact}
                        // toggleTask={toggleTask}
                        // removeTask={removeTask}
                        item={impactStat}
                    />
                </Box>

                <Box className="donation-for">
                    <EditBlock
                        title={"Describe what you need donations for:"}
                        text={`Tell your donors what you need funds for.`}
                        inputPlaceholder={`E.g. "provide breakfast to all children".`}
                        mb="30px"
                        onChange={handleDonationFor}
                        value={donationFor}
                    />
                </Box>


                <Box className="donation-goes-for">
                    <EditBlock
                        title={"Describe where your money goes:"}
                        text={`Tell supporters what you will do with their donations.`}
                        inputPlaceholder={`E.g. "buy cereal, fruits, oats, milk, bowls and spoons 
so we can give every child a breakfast".`}
                        mb="30px"
                        onChange={handleDonationGoesFor}
                        value={donationGoesFor}
                    />
                </Box>

            </EditBlockStyled>

            <MainTextBoxStyle>
                <Box className="main-text">
                    <EditBlock
                        title={"Main Text:"}
                        text={`If you want to edit any of part of the email 
                        or rewrite it altogether here’s your chance.`}
                        inputPlaceholder={`E.g. "provide breakfast to all children".`}
                        mb="30px"
                        onChange={handleMainText}
                        value={mainText}
                    />
                </Box>
            </MainTextBoxStyle>

        </>
    )
}

export default EditBlockTwo