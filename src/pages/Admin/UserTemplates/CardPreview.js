import { Box } from '@chakra-ui/react';
import React from 'react';
import { useGetTemplateQuery } from '../../../features/user/userApi';
import EmailPreviewCard from '../../../ui/EmailPreviewCard';
import { getPlainText } from "../../../utils/getPlainText";
import { EditBlockStyled } from '../../EmailDashboard/style';

const CardPreview = ({ id }) => {
    const { data, isLoading, isError } = useGetTemplateQuery(id, {
        refetchOnMountOrArgChange: true,
    });

    const { subjectLine, preview, serviceDesc, beneficiaryName, beneficiaryHelped, beneficiaryAfter, beneficiaryBefore, beneficiaryDesc, donationGoesFor, donationFor, socialMediaBenefit, impactStat, donationDoes, mainText, mainGoalSummary } = data || {};

    return (
        <>
            <EditBlockStyled direction={"column"}>
                <Box className="subject-line">
                    <EmailPreviewCard
                        title={"Subject Line:"}
                        mb="30px"
                        value={getPlainText(subjectLine)}
                    />
                </Box>

                <Box className="preview">
                    <EmailPreviewCard
                        title={"Preview:"}
                        mb="30px"
                        value={getPlainText(preview)}
                    />
                </Box>
                {
                    serviceDesc
                    &&
                    <Box className="service-description">
                        <EmailPreviewCard
                            title="Insert description of services provided:"
                            mb="30px"
                            value={getPlainText(serviceDesc)}
                        />
                    </Box>
                }

                {
                    impactStat
                    &&
                    <Box className="impact-statistic">
                        <EmailPreviewCard
                            title="Insert impact statistics:"
                            mb="30px"
                            value={getPlainText(impactStat)}
                        />
                    </Box>
                }

                {
                    beneficiaryDesc
                    &&
                    <Box className="beneficiary-description">
                        <EmailPreviewCard
                            title="Insert description of 
                    beneficiary:"
                            mb="30px"
                            value={getPlainText(beneficiaryDesc)}
                        />
                    </Box>
                }

                {
                    beneficiaryName
                    &&
                    <Box className="beneficiary-name">
                        <EmailPreviewCard
                            title="Beneficiary Name:"
                            mb="30px"
                            value={getPlainText(beneficiaryName)}
                        />
                    </Box>
                }

                {
                    beneficiaryHelped
                    &&
                    <Box className="help">
                        <EmailPreviewCard
                            title="Describe how they were helped:"
                            mb="30px"
                            value={getPlainText(beneficiaryHelped)}
                        />
                    </Box>
                }

                {
                    donationDoes
                    &&
                    <Box className="donation">
                        <EmailPreviewCard
                            title="Explain what their donation does:"
                            mb="30px"
                            value={getPlainText(donationDoes)}
                        />
                    </Box>
                }

                {
                    socialMediaBenefit
                    &&
                    <Box className="donation">
                        <EmailPreviewCard
                            title="Explain what their donation does:"
                            mb="30px"
                            value={getPlainText(socialMediaBenefit)}
                        />
                    </Box>
                }

                {
                    beneficiaryBefore
                    &&
                    <Box className="story-before">
                        <EmailPreviewCard
                            title="Describe beneficairy story before you supported them"
                            mb="30px"
                            value={getPlainText(beneficiaryBefore)}
                        />
                    </Box>
                }

                {
                    beneficiaryAfter
                    &&
                    <Box className="story-after">
                        <EmailPreviewCard
                            title="Describe beneficairy story after you supported them"
                            mb="30px"
                            value={getPlainText(beneficiaryAfter)}
                        />
                    </Box>
                }


                {
                    donationGoesFor
                    &&
                    <Box className="money-goes">
                        <EmailPreviewCard
                            title="Describe where your money goes:"
                            mb="30px"
                            value={getPlainText(donationGoesFor)}
                        />
                    </Box>
                }
                {
                    donationFor
                    &&
                    <Box className="donation-for">
                        <EmailPreviewCard
                            title="Describe what you need donations for:"
                            mb="30px"
                            value={getPlainText(donationFor)}
                        />
                    </Box>
                }
                {
                    mainGoalSummary
                    &&
                    <Box className="main-goal-summary">
                        <EmailPreviewCard
                            title="Describe what you need donations for:"
                            mb="30px"
                            value={getPlainText(mainGoalSummary)}
                        />
                    </Box>
                }
                {
                    mainText
                    &&
                    <Box>
                        <EmailPreviewCard
                            title={"Main Text:"}
                            mb="30px"
                            value={getPlainText(mainText)}
                        />
                    </Box>
                }

            </EditBlockStyled>
        </>
    )
}

export default CardPreview