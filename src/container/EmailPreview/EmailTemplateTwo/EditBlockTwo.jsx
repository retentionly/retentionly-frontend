import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListEditor from "../../../components/Editor/ListEditor";
import EditBlock from '../../../components/EditorBlock';
import UploadImage from '../../../components/UploadImage/UploadImage';
import { setDonationFor, setDonationGoesFor, setMainText, setPreview, setSubjectLine } from '../../../features/template/templateSlice';
import { Text30 } from '../../../theme/text';
import { EditBlockStyled, MainTextBoxStyle } from '../style';

const EditBlockTwo = ({ id, onDrop, image, sizeError, tempLoading }) => {
    const dispatch = useDispatch();
    const { template } = useSelector(state => state);
    const { preview, subjectLine, mainText, impactStat, donationFor, donationGoesFor } = template || {};

    console.log('impact', impactStat)

    const handleSubjectLine = (e) => {
        dispatch(setSubjectLine(e));
    }
    const handlePreview = (e) => {
        dispatch(setPreview(e));
    }
    const handleMainText = (e) => {
        dispatch(setMainText(e));
    }

    const handleDonationFor = (e) => {
        dispatch(setDonationFor(e));
    }
    const handleDonationGoesFor = (e) => {
        dispatch(setDonationGoesFor(e));
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
                {!tempLoading &&
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
                {!tempLoading && <Box className="preview">
                    <EditBlock
                        title={"Preview:"}
                        text={`Tell donors your main campaign message.`}
                        inputPlaceholder={`E.g. "provide breakfast to all children".`}
                        mb="30px"
                        onChange={handlePreview}
                        value={preview}
                    />
                </Box>}
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
                {donationFor &&
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
                }
                {
                    donationGoesFor &&
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
                }
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