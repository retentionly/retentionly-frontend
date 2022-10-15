import { Box, Heading, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import ListEditor from "../../components/Editor/ListEditor/ListEditor";
import EditBlock from "../../components/EditorBlock";
import UploadImage from "../../components/UploadImage/UploadImage";
import { useGetTemplateQuery } from "../../features/template/templateApi";
import {
    setBeneficiaryAfter,
    setBeneficiaryBefore,
    setBeneficiaryDesc, setBeneficiaryHelped, setBeneficiaryName, setDonationDoes, setDonationFor, setDonationGoesFor, setImpactStat, setMainGoalSummary, setMainText, setPreview,
    setServiceDesc, setSocial, setSubjectLine
} from "../../features/template/templateSlice";
import { Text20, Text30 } from "../../theme/text";
import RegularTextbox from "../../ui/RegularTextbox/RegularTextbox";
import { EditBlockStyled, MainTextBoxStyle } from "./style";

const DashboardEditBlock = ({ onDrop, id, images, image, name, sizeError }) => {
    const dispatch = useDispatch();

    const { data, isLoading, isError } = useGetTemplateQuery(id, {
        refetchOnMountOrArgChange: true,
    });

    const { subjectLine, preview, serviceDesc, beneficiaryName, beneficiaryHelped, beneficiaryAfter, beneficiaryBefore, beneficiaryDesc, donationGoesFor, donationFor, socialMediaBenefit, social, impactStat, donationDoes, mainText, mainGoalSummary } = data || {};

    const handleSubjectLine = (e) => {
        dispatch(setSubjectLine(e));
    }
    const handlePreview = (e) => {
        dispatch(setPreview(e));
    }
    const handleServiceDesc = (e) => {
        dispatch(setServiceDesc(e));
    }
    const handleBeneficiaryName = (e) => {
        dispatch(setBeneficiaryName(e));
    }
    const handleBeneficiaryHelped = (e) => {
        dispatch(setBeneficiaryHelped(e));
    }
    const handleBeneficiaryAfter = (e) => {
        dispatch(setBeneficiaryAfter(e));
    }
    const handleBeneficiaryBefore = (e) => {
        dispatch(setBeneficiaryBefore(e));
    }
    const handleBeneficiaryDesc = (e) => {
        dispatch(setBeneficiaryDesc(e));
    }
    const handleDonationGoesFor = (e) => {
        dispatch(setDonationGoesFor(e));
    }
    const handleDonationFor = (e) => {
        dispatch(setDonationFor(e));
    }
    const handleImpactStat = (e) => {
        dispatch(setImpactStat(e));
    }
    const handleDonationDoes = (e) => {
        dispatch(setDonationDoes(e));
    }
    const handleMainGoalSummary = (e) => {
        dispatch(setMainGoalSummary(e));
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

    const handleMainText = (e) => {
        dispatch(setMainText(e));
    }

    const className = name.toLowerCase().replace(" ", "-");


    return (
        <>
            <EditBlockStyled direction={"column"} className={className}>
                <Box mb={3} className="upload">
                    <Heading color="black" fontWeight={400} mb="14px" {...Text30}>Upload Template Image:</Heading>
                    <Box mb="10px" >
                        {
                            sizeError
                                ? <Text color="red" fontWeight="semibold">{sizeError}</Text>
                                : <Text color="#000">Recommended Resolution: (490 * 368)</Text>

                        }
                    </Box>
                    <UploadImage onDrop={onDrop} accept={"image/*"} images={images} image={image} />
                </Box>
                <Box className="subject-line">
                    <EditBlock
                        title={"Subject Line:"}
                        text={`Tell donors your main campaign message. 
                        E.g. "Your gift could change a child’s life".`}
                        inputPlaceholder={`E.g. "provide breakfast to all children".`}
                        mb="30px"
                        onChange={handleSubjectLine}
                        value={subjectLine || []}
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
                        value={preview || []}
                    />
                </Box>
                {
                    socialMediaBenefit &&
                    <Box>
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
                            data={socialMediaBenefit}
                            social={true}
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

                {
                    serviceDesc
                    &&
                    <Box className="service-description">
                        <EditBlock
                            title="Insert description of services provided:"
                            text="Tell donors what there donation is doing"
                            inputPlaceholder={`E.g. "provide breakfast to all children".`}
                            mb="30px"
                            onChange={handleServiceDesc}
                            value={serviceDesc || []}
                        />
                    </Box>
                }

                {
                    impactStat
                    &&
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
                    //                     <Box className="impact-statistic">
                    //                         <EditBlock
                    //                             title="Insert impact statistics:"
                    //                             text={`List out the impact your charity has made to build credibility with the recipients.`}
                    //                             inputPlaceholder={
                    //                                 `E.g. " 1. Feed 1,000 people 
                    // 2. Sponsored 500 orphans 
                    // 3. Installed 500 water pumps".`}
                    //                             mb="30px"
                    //                             onChange={handleImpactStat}
                    //                             value={impactStat || []}
                    //                         />
                    //                     </Box>
                }

                {
                    beneficiaryDesc
                    &&
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

                {
                    beneficiaryName
                    &&
                    <Box className="beneficiary-name">
                        <EditBlock
                            title="Beneficiary Name:"
                            text={`Introduce your donors to the people/person they have helped.`}
                            inputPlaceholder={`E.g. "Jamal”.  `}
                            mb="30px"
                            onChange={handleBeneficiaryName}
                            value={beneficiaryName || []}
                        />
                    </Box>
                }

                {
                    beneficiaryHelped
                    &&
                    <Box className="help">
                        <EditBlock
                            title="Describe how they were helped:"
                            text={`Tell your donors how beneficiary benefited from donations. `}
                            inputPlaceholder={`E.g. "by providing him with a healthy breakfast
everyday before school".`}
                            mb="30px"
                            onChange={handleBeneficiaryHelped}
                            value={beneficiaryHelped || []}
                        />
                    </Box>
                }

                {
                    donationDoes
                    &&
                    <Box className="donation">
                        <EditBlock
                            title="Explain what their donation does:"
                            text={`Tell your donors what you need funds for.`}
                            inputPlaceholder={`E.g. "provide breakfast to all children".`}
                            mb="30px"
                            onChange={handleDonationDoes}
                            value={donationDoes || []}
                        />
                    </Box>
                }

                {/* {
                    socialMediaBenefit
                    &&
                    <Box className="social-media">
                        <EditBlock
                            title="Insert benefits of following 
                            your social media account"
                            text={`List down why we should follow you
                            social media pages.`}
                            inputPlaceholder={`E.g. ‘1. It’s a great way to keep up to date with your donation.
2. It’s free!”`}
                            mb="30px"
                            onChange={handleSocialMediaBenefit}
                            value={socialMediaBenefit || []}
                        />
                    </Box>
                } */}

                {
                    beneficiaryBefore
                    &&
                    <Box className="story-before">
                        <EditBlock
                            title="Describe beneficairy story before you supported them"
                            text={`Explain the beneficairy’s situation before you supported them. `}
                            inputPlaceholder={`E.g. "Jamal used to go to school on a empty stomach.
 No breakfeast. No fuel for a busy school day. 
 This had a dramatic effect on his grades".`}
                            mb="30px"
                            onChange={handleBeneficiaryBefore}
                            value={beneficiaryBefore || []}
                        />
                    </Box>
                }

                {
                    beneficiaryAfter
                    &&
                    <Box className="story-after">
                        <EditBlock
                            title="Describe beneficairy story after you supported them"
                            text={`Explain the beneficairy’s situation after you supported them.`}
                            inputPlaceholder={`E.g."Thanks to donor like you we were able to provide Jamal with a healthy breakfast everyday before school. Fuelled properly, his grades started to improve. `}
                            mb="30px"
                            onChange={handleBeneficiaryAfter}
                            value={beneficiaryAfter || []}
                        />
                    </Box>
                }

                {
                    donationGoesFor
                    &&
                    <Box className="money-goes">
                        <EditBlock
                            title="Describe where your money goes:"
                            text={`Tell supporters what you will do with their donations.`}
                            inputPlaceholder={`E.g. "buy cereal, fruits, oats, milk, bowls and spoons
so we can give every child a breakfast".`}
                            mb="30px"
                            onChange={handleDonationGoesFor}
                            value={donationGoesFor || []}
                        />
                    </Box>
                }

                {
                    donationFor
                    &&
                    <Box className="donation-for">
                        <EditBlock
                            title="Describe what you need donations for:"
                            text={`Tell your donors what you need funds for.`}
                            inputPlaceholder={`E.g. "provide breakfast to all children".`}
                            mb="30px"
                            onChange={handleDonationFor}
                            value={donationFor || []}
                        />
                    </Box>
                }
                {
                    mainGoalSummary
                    &&
                    <Box className="main-goal-summary">
                        <EditBlock
                            title="Describe summary of your main goals:"
                            text={`Tell supporters what you will do with 
                            their donations.`}
                            inputPlaceholder={`E.g. "buy cereal, fruits, oats, milk, bowls and spoons
so we can give every child a breakfast".`}
                            mb="30px"
                            onChange={handleMainGoalSummary}
                            value={mainGoalSummary || []}
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
export default DashboardEditBlock
