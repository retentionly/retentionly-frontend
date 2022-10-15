import { createAction, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

export const revertAllTemplate = createAction('REVERT_ALL')
const templateSlice = createSlice({

    name: 'template',
    initialState,
    extraReducers: (builder) => builder.addCase(revertAllTemplate, () => initialState),
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setImage: (state, action) => {
            state.image = action.payload
        },
        setSubjectLine: (state, action) => {
            state.subjectLine = action.payload
        },
        setPreview: (state, action) => {
            state.preview = action.payload
        },
        setServiceDesc: (state, action) => {
            state.serviceDesc = action.payload
        },
        setBeneficiaryName: (state, action) => {
            state.beneficiaryName = action.payload
        },
        setBeneficiaryHelped: (state, action) => {
            state.beneficiaryHelped = action.payload
        },
        setBeneficiaryAfter: (state, action) => {
            state.beneficiaryAfter = action.payload
        },
        setBeneficiaryBefore: (state, action) => {
            state.beneficiaryBefore = action.payload
        },
        setBeneficiaryDesc: (state, action) => {
            state.beneficiaryDesc = action.payload
        },
        setDonationGoesFor: (state, action) => {
            state.donationGoesFor = action.payload
        },
        setDonationFor: (state, action) => {
            state.donationFor = action.payload
        },
        setDonationDoes: (state, action) => {
            state.donationDoes = action.payload
        },
        setImpactStat: (state, action) => {
            state.impactStat = action.payload
        },
        setSocialMediaBenefit: (state, action) => {
            state.socialMediaBenefit = action.payload;
        },
        setSocial: (state, action) => {
            state.social = action.payload
        },
        setMainGoalSummary: (state, action) => {
            state.mainGoalSummary = action.payload
        },
        setMainText: (state, action) => {
            state.mainText = action.payload
        },
        setRef: (state, action) => {
            state.ref = action.payload
        },
        setEmailSubject: (state, action) => {
            state.emailSubject = action.payload
        },
        setTemplate: (state, action) => {
            state.name = action.payload.name
            state.image = action.payload.image
            state.subjectLine = action.payload.subjectLine
            state.preview = action.payload.preview
            state.serviceDesc = action.payload.serviceDesc
            state.beneficiaryName = action.payload.beneficiaryName
            state.beneficiaryHelped = action.payload.beneficiaryHelped
            state.beneficiaryAfter = action.payload.beneficiaryAfter
            state.beneficiaryBefore = action.payload.beneficiaryBefore
            state.beneficiaryDesc = action.payload.beneficiaryDesc
            state.donationGoesFor = action.payload.donationGoesFor
            state.donationFor = action.payload.donationFor
            state.donationDoes = action.payload.donationDoes
            state.impactStat = action.payload.impactStat
            state.mainGoalSummary = action.payload.mainGoalSummary
            state.mainText = action.payload.mainText
            state.ref = action.payload.ref
            state.socialMediaBenefit = action.payload.socialMediaBenefit;
            state.social = action.payload.social
            state.emailSubject = action.payload.emailSubject
        },
        reset: () => initialState
    },
})

export const {
    setName,
    setImage,
    setSubjectLine,
    setPreview,
    setServiceDesc,
    setBeneficiaryName,
    setBeneficiaryHelped,
    setBeneficiaryAfter,
    setBeneficiaryBefore,
    setBeneficiaryDesc,
    setDonationGoesFor,
    setDonationFor,
    setDonationDoes,
    setImpactStat,
    setMainText,
    setTemplate,
    setSocialMediaBenefit,
    setMainGoalSummary,
    setRef,
    setSocial
} = templateSlice.actions;
export default templateSlice.reducer;